// Import React and Component
import React, { useState, useEffect, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/colors/colors";
import RegisterWelcome from "../../assets/SVG/RegisterWelcome";
import Success from "../../assets/SVG/Success";

import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import FIREBASE_CONFIG from "../../assets/FirebaseConfig";
import * as firebase from "firebase";
import OtpLogo from "../../assets/SVG/OtpLogo";
import { StatusBar } from "expo-status-bar";
import Loader from "../../components/Loader";

try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

const SignUpScreen = ({ navigation, route }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [UserCity, setUserCity] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [isPhoneAuthenticated, setIsPhoneAuthenticated] = useState(false);

  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState("");
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  const [modalVisible, setModalVisible] = useState(false);

  const userInputRef = createRef();
  const emailInputRef = createRef();
  const phoneInputRef = createRef();
  const cityInputRef = createRef();
  const passwordInputRef = createRef();
  const confirmPasswordInputRef = createRef();

  useEffect(() => {
    if (isPhoneAuthenticated) {
      setLoading(true);

      const requestBody = {
        query: `mutation {
          createDoctor(doctorInput: { 
            name: "${userName}", 
            city: "${UserCity}",
            email: "${userEmail}",
            password: "${userPassword}",
            phone: "${phoneNumber}"
          }){
            _id
            name
          }
        }`,
      };

      fetch("https://doctor-management-server.herokuapp.com/clinic", {
        method: "post",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
            alert("Something went wrong! Please try again!");
          }
          return res.json();
        })
        .then((result) => {
          setLoading(false);
          if (result.errors) {
            alert(result.errors[0].message);
          }
          if (result.data != null) {
            console.log(result.data);

            setIsRegistrationSuccess(true);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [isPhoneAuthenticated]);

  const setPhoneNumberWithCode = (num) => {
    let newNum = "+91" + num;
    setPhoneNumber(newNum);
  };

  const handleSubmitButton = () => {
    setErrortext("");
    let isLetters = /^[A-Z a-z]+$/;
    let isEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isPhoneNo = /^\d{10}$/;
    if (!userName) {
      setErrortext("Please fill Name.");
      return;
    } else if (!userName.match(isLetters)) {
      setErrortext("All characters of username should be letters.");
      return;
    }

    if (!userEmail) {
      setErrortext("Please fill Email");
      return;
    } else if (!userEmail.match(isEmail)) {
      setErrortext("Please enter valid email.");
      return;
    }

    if (!phoneNumber) {
      setErrortext("Please Enter Phone number");
      return;
    } else if (!phoneNumber.substring(3).match(isPhoneNo)) {
      setErrortext("Please enter valid Phone number.");
      return;
    }

    if (!UserCity) {
      setErrortext("Please fill City");
      return;
    }

    if (!userPassword) {
      setErrortext("Please fill Password");
      return;
    } else if (userPassword.length < 8) {
      setErrortext("Password length should not be less than 8 characters.");
      return;
    }

    if (userPassword !== confirmPassword) {
      setErrortext("Password and Confirm Password doesn't match.");
      return;
    }

    setModalVisible(true);
  };
  return (
    <>
      {isRegistrationSuccess ? (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.teal,
            justifyContent: "center",
          }}
        >
          <StatusBar animated style="dark" backgroundColor={colors.teal} />
          <Success height="250" width="100%" />
          <Text style={styles.successTextStyle}>Registration Successful</Text>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: colors.darkTeal }]}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonTextStyle}>Login Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, backgroundColor: "white", marginTop: "10%" }}>
          <StatusBar animated style="dark" backgroundColor={colors.white} />
          <Loader loading={loading} />
          <Modal
            style={styles.container}
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.container}>
              <View style={styles.content}>
                <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
                  ref={recaptchaVerifier}
                  firebaseConfig={FIREBASE_CONFIG}
                  // attemptInvisibleVerification={true}
                />
                <View style={{ alignItems: "center" }}>
                  <OtpLogo width="300" height="200" />
                </View>
                <Text style={[styles.text, { alignSelf: "center" }]}>
                  We will send OTP on {phoneNumber}
                </Text>

                <TouchableOpacity
                  style={styles.sendText}
                  disabled={!phoneNumber}
                  onPress={async () => {
                    const phoneProvider = new firebase.auth.PhoneAuthProvider();
                    try {
                      setVerifyError(undefined);
                      setVerifyInProgress(true);
                      setVerificationId("");
                      const verificationId =
                        await phoneProvider.verifyPhoneNumber(
                          phoneNumber,
                          // @ts-ignore
                          recaptchaVerifier.current
                        );
                      setVerifyInProgress(false);
                      setVerificationId(verificationId);
                      verificationCodeTextInput.current?.focus();
                    } catch (err) {
                      setVerifyError(err);
                      setVerifyInProgress(false);
                    }
                  }}
                >
                  <Text
                    style={{
                      color: "blue",
                      fontSize: 15,
                      textDecorationLine: "underline",
                      fontWeight: "bold",
                    }}
                  >{`${verificationId ? "Resend" : "Send"} OTP`}</Text>
                </TouchableOpacity>

                {verifyError && (
                  <Text
                    style={styles.error}
                  >{`Error: ${verifyError.message}`}</Text>
                )}
                {verifyInProgress && (
                  <ActivityIndicator style={styles.loader} />
                )}
                {verificationId ? (
                  <Text style={styles.success}>
                    A verification code has been sent to your phone
                  </Text>
                ) : undefined}

                <View style={styles.SectionStyleotp}>
                  <TextInput
                    ref={verificationCodeTextInput}
                    style={[
                      styles.inputStyle,
                      { textAlign: "center", fontSize: 17 },
                    ]}
                    editable={!!verificationId}
                    placeholder="Enter OTP"
                    onChangeText={(verificationCode) =>
                      setVerificationCode(verificationCode)
                    }
                  />
                </View>

                <TouchableOpacity
                  style={styles.buttonStyle1}
                  title="Confirm Verification Code"
                  disabled={!verificationCode}
                  onPress={async () => {
                    try {
                      setConfirmError(undefined);
                      setConfirmInProgress(true);
                      const credential =
                        firebase.auth.PhoneAuthProvider.credential(
                          verificationId,
                          verificationCode
                        );
                      const authResult = await firebase
                        .auth()
                        .signInWithCredential(credential);
                      setConfirmInProgress(false);
                      setVerificationId("");
                      setVerificationCode("");
                      verificationCodeTextInput.current?.clear();
                      setIsPhoneAuthenticated(true);
                      setModalVisible(false);
                    } catch (err) {
                      setConfirmError(err);
                      setConfirmInProgress(false);
                    }
                  }}
                >
                  <Text style={styles.buttonTextStyle}>
                    Confirm Verification Code
                  </Text>
                </TouchableOpacity>
                {confirmError && (
                  <Text
                    style={styles.error}
                  >{`Error: ${confirmError.message}`}</Text>
                )}
                {confirmInProgress && (
                  <ActivityIndicator style={styles.loader} />
                )}
              </View>
              {!isConfigValid && (
                <View style={styles.overlay} pointerEvents="none">
                  <Text style={styles.overlayText}>Something went wrong!!</Text>
                </View>
              )}
            </View>
          </Modal>

          <StatusBar animated style="dark" backgroundColor={colors.darkTeal} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              justifyContent: "center",
              backgroundColor: colors.teal,
              alignContent: "center",
            }}
          >
            <Text style={styles.headertext}>Create an Account</Text>
            {/* <View style={{ alignItems: "center" }}>
              <RegisterWelcome height="200" width="100%" />
            </View> */}
            <View style={styles.box}>
              <Text style={styles.registerTextStyle}>Create an Account</Text>

              <Text style={{ marginTop: 10, marginLeft: -17 }}>Name:</Text>
              <KeyboardAvoidingView enabled>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserName) => setUserName(UserName)}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Name"
                    placeholderTextColor="rgba(23, 37, 42,0.5)"
                    ref={userInputRef}
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      userInputRef.current && userInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                </View>

                <Text style={{ marginTop: 5, marginLeft: -17 }}>Email:</Text>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Email"
                    placeholderTextColor="rgba(23, 37, 42,0.5)"
                    keyboardType="email-address"
                    ref={emailInputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      emailInputRef.current && emailInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                </View>
                <Text style={{ marginTop: 5, marginLeft: -17 }}>Number:</Text>
                <View style={styles.SectionStyle}>
                  <Text style={styles.countryCode}>+91</Text>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(phoneNum) =>
                      setPhoneNumberWithCode(phoneNum)
                    }
                    underlineColorAndroid="#f000"
                    placeholder="Enter Mobile No."
                    placeholderTextColor="rgba(23, 37, 42,0.5)"
                    keyboardType="phone-pad"
                    autoCompleteType="tel"
                    textContentType="telephoneNumber"
                    ref={phoneInputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      phoneInputRef.current && phoneInputRef.current.focus()
                    }
                    editable={!verificationId}
                    blurOnSubmit={false}
                  />
                </View>
                <Text style={{ marginTop: 5, marginLeft: -17 }}>City:</Text>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserCity) => setUserCity(UserCity)}
                    underlineColorAndroid="#f000"
                    placeholder="City"
                    placeholderTextColor="rgba(23, 37, 42,0.5)"
                    autoCapitalize="sentences"
                    ref={cityInputRef}
                    returnKeyType="next"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                  />
                </View>
                <Text style={{ marginTop: 5, marginLeft: -17 }}>Password:</Text>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserPassword) =>
                      setUserPassword(UserPassword)
                    }
                    underlineColorAndroid="#f000"
                    placeholder="Enter Password"
                    placeholderTextColor="rgba(23, 37, 42,0.5)"
                    ref={passwordInputRef}
                    returnKeyType="next"
                    secureTextEntry={true}
                    onSubmitEditing={() =>
                      passwordInputRef.current &&
                      passwordInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                </View>
                <Text style={{ marginTop: 5, marginLeft: -17 }}>
                  Confirm Password:
                </Text>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(ConfPassword) =>
                      setConfirmPassword(ConfPassword)
                    }
                    underlineColorAndroid="#f000"
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(23, 37, 42,0.5)"
                    ref={confirmPasswordInputRef}
                    returnKeyType="next"
                    secureTextEntry={true}
                    onSubmitEditing={() =>
                      confirmPasswordInputRef.current &&
                      confirmPasswordInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                </View>

                {errortext != "" ? (
                  <Text style={styles.errorTextStyle}>{errortext}</Text>
                ) : null}
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  disabled={!phoneNumber}
                  onPress={() => handleSubmitButton()}
                >
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 5,
    marginLeft: -17,
    marginRight: -17,
    margin: 10,
  },
  SectionStyleotp: {
    flexDirection: "row",
    height: 40,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: -17,
    marginRight: -17,
    marginTop: 30,
    marginBottom: 25,
  },
  buttonStyle1: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 25,
  },

  sendText: {
    backgroundColor: colors.white,
    borderWidth: 0,
    color: colors.white,
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },

  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "#616A6B",
    backgroundColor: colors.aqua,
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 9,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.aqua,
  },
  registerTextStyle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  error: {
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
  success: {
    marginTop: 10,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  loader: {
    marginTop: 10,
    backgroundColor: colors.darkTeal,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFFC0",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginBottom: 2,
    fontSize: 29,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.35,
    fontWeight: "bold",
  },
  text: {
    color: "#4d648d",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    padding: 10,
  },
  countryCode: {
    textAlign: "center",
    alignSelf: "center",
    color: "rgba(23, 37, 42,0.5)",
    backgroundColor: colors.aqua,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 6,
    paddingRight: 6,
    elevation: 3,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    borderColor: colors.aqua,
  },
  box: {
    borderWidth: 0,
    borderRadius: 15,
    borderColor: colors.teal,
    padding: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 45,
    marginBottom: 50,
    height: 685,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
  },
  headertext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});
