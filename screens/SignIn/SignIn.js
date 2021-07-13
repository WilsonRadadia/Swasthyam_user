import React, { useState, createRef, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Welcome from "../../assets/SVG/welcome";
import colors from "../../assets/colors/colors";

import { Context } from "../../navigation";
// import AsyncStorage from "@react-native-community/async-storage";
import * as Google from "expo-google-app-auth";
import Loader from "../../components/Loader";
import { StatusBar } from "expo-status-bar";

import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { TEXT_NODE } from "min-document";

const firebaseConfigs = {
  apiKey: "AIzaSyDL3W6hSbf3Dy1C1VnwOT1RycG29Xkpq6I",
  authDomain: "swasthyamuser.firebaseapp.com",
  projectId: "swasthyamuser",
  storageBucket: "swasthyamuser.appspot.com",
  messagingSenderId: "382538533700",
  appId: "1:382538533700:web:762276453a3b9feba82511",
};

try {
  firebase.initializeApp(firebaseConfigs);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const SignInScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const [state, dispatch] = useContext(Context);

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setLoading(true);
    const requestBody = {
      query: `query {
          doctorlogin(username:"${userEmail}",password:"${userPassword}"){
            userId,
            token,
          }
        }`,
    };

    function componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          console.log(user);
        }
      });
    }

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
          setLoading(false);
        }
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        if (response.errors) {
          alert(response.errors[0].message);
        }
        if (response.data !== null) {
          dispatch({ type: "SET_USER", user: response, isSignedIn: true });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        androidClientId:
          "382538533700-3astsotihvv2ft93v031aatatpkbo8os.apps.googleusercontent.com",
        iosClientId:
          "382538533700-c16a33817cf5ajcv8jsd62cs8lj7tquc.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        //return result.accessToken;
        dispatch({
          type: "SET_USER",
          user: result.accessToken,
          isSignedIn: true,
        });
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <View style={styles.mainBody}>
      <StatusBar animated style="dark" backgroundColor={colors.teal} />
      <Loader loading={loading} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
          paddingTop: 70,
        }}
      >
        <Text style={styles.headertext}>Sign In Account</Text>
        <View style={styles.box}>
          <Text style={styles.welcometext}>Welcome Back</Text>

          <Text style={{ marginTop: 30, marginLeft: -17 }}>Email:</Text>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="rgba(23, 37, 42,0.5)"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>

            <Text style={{ marginTop: 10, marginLeft: -17 }}>Password:</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="rgba(23, 37, 42,0.5)"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <Text
              style={[
                styles.forgotTextStyle,
                { color: "#707B7C", marginTop: 10 },
              ]}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password?
            </Text>

            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginLeft: 35,
                marginRight: 35,
              }}
            >
              <View>
                <Text
                  style={[styles.registerTextStyle, { color: "#707B7C" }]}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  New Here ? Register
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.googlebutton}
              activeOpacity={0.5}
              onPress={signInWithGoogleAsync}
            >
              <Text style={styles.googlebuttontext}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.facebookbutton}
              activeOpacity={0.5}
              //onPress={signInWithFacebook}
            >
              <Text style={styles.facebookbuttontext}>Login with Facebook</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: colors.teal,
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 5,
    marginLeft: -17,
    marginRight: -17,
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
    marginTop: 20,
    marginBottom: 20,
  },
  googlebutton: {
    backgroundColor: "#de5246",
    borderWidth: 0,
    color: colors.white,
    borderColor: "red",
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
    marginTop: 35,
    marginBottom: 15,
    marginLeft: -17,
    marginRight: -17,
  },
  googlebuttontext: {
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    fontSize: 16,
  },
  facebookbutton: {
    backgroundColor: "#4267B2",
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
    marginTop: 10,
    marginBottom: 25,
    marginLeft: -17,
    marginRight: -17,
  },
  facebookbuttontext: {
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputStyle: {
    flex: 1,
    color: "#616A6B",
    backgroundColor: colors.aqua,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.aqua,
    elevation: 9,
  },
  registerTextStyle: {
    fontSize: 14,
    textAlign: "center",
  },
  forgotTextStyle: {
    fontSize: 14,
    textAlign: "center",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
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
    height: 550,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
  },
  welcometext: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  headertext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: -20,
  },
});
