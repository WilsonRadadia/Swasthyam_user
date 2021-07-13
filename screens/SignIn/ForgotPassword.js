import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import FIREBASE_CONFIG from "../../assets/FirebaseConfig";
import * as firebase from "firebase";
import OtpLogo from "../../assets/SVG/OtpLogo";
import colors from "../../assets/colors/colors";
import { StatusBar } from "expo-status-bar";

try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

export default function ForgotPassword({ navigation }) {
  const recaptchaVerifier = useRef(null);
  const verificationCodeTextInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verifyError, setVerifyError] = useState();
  const [verifyInProgress, setVerifyInProgress] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmError, setConfirmError] = useState();
  const [confirmInProgress, setConfirmInProgress] = useState(false);
  const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  const [modalVisible, setModalVisible] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const setPhoneNumberWithCode = (num) => {
    let newNum = "+91" + num;
    setPhoneNumber(newNum);
  };

  const handleSubmitButton = () => {
    if (!userPassword) {
      alert("Please fill Password");
      return;
    } else if (userPassword.length < 8) {
      alert("Password length should not be less than 8 characters.");
      return;
    }

    if (userPassword !== confirmPassword) {
      alert("Password and Confirm Password doesn't match.");
      return;
    }

    setModalVisible(false);
    alert("Password changed successfully!");
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <StatusBar animated style="dark" backgroundColor={colors.white} />
      <Modal
        style={styles.container}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={styles.modalContent}>
            <Text style={styles.text}>Reset your Password.</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter new password"
                placeholderTextColor="rgba(23, 37, 42,0.5)"
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(ConfPassword) =>
                  setConfirmPassword(ConfPassword)
                }
                underlineColorAndroid="#f000"
                placeholder="Confirm new password"
                placeholderTextColor="rgba(23, 37, 42,0.5)"
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                  confirmPasswordInputRef.current &&
                  confirmPasswordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              disabled={!phoneNumber}
              onPress={() => handleSubmitButton()}
            >
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          backgroundColor: "white",
          alignContent: "center",
        }}
      >
        <View style={styles.content}>
          <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={FIREBASE_CONFIG}
            // attemptInvisibleVerification={true}
          />
          <View style={{ alignItems: "center" }}>
            <OtpLogo width="300" height="200" />
          </View>
          <Text style={styles.text}>Enter your registered phone number.</Text>
          <Text style={styles.text}>We will send OTP on this number.</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              autoFocus={isConfigValid}
              autoCompleteType="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              placeholder="Phone number"
              editable={!verificationId}
              onChangeText={(phoneNumber) =>
                setPhoneNumberWithCode(phoneNumber)
              }
            />
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            disabled={!phoneNumber}
            onPress={async () => {
              const phoneProvider = new firebase.auth.PhoneAuthProvider();
              try {
                setVerifyError(undefined);
                setVerifyInProgress(true);
                setVerificationId("");
                const verificationId = await phoneProvider.verifyPhoneNumber(
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
            <Text style={styles.buttonTextStyle}>{`${
              verificationId ? "Resend" : "Send"
            } Verification Code`}</Text>
          </TouchableOpacity>

          {verifyError && (
            <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
          )}
          {verifyInProgress && <ActivityIndicator style={styles.loader} />}
          {verificationId ? (
            <Text style={styles.success}>
              A verification code has been sent to your phone
            </Text>
          ) : undefined}
          <Text style={[styles.text, { marginTop: 30 }]}>Enter OTP</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              ref={verificationCodeTextInput}
              style={[styles.inputStyle, { textAlign: "center" }]}
              editable={!!verificationId}
              placeholder="Enter OTP"
              onChangeText={(verificationCode) =>
                setVerificationCode(verificationCode)
              }
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            disabled={!verificationCode}
            onPress={async () => {
              try {
                setConfirmError(undefined);
                setConfirmInProgress(true);
                const credential = firebase.auth.PhoneAuthProvider.credential(
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
                setModalVisible(true);
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
            <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
          )}
          {confirmInProgress && <ActivityIndicator style={styles.loader} />}
        </View>
        {!isConfigValid && (
          <View style={styles.overlay} pointerEvents="none">
            <Text style={styles.overlayText}>Something went wrong!!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: 50,
  },
  modalContent: {
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
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
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
    elevation: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.aqua,
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
  },
  loader: {
    marginTop: 10,
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
});
