import React, { useState, useEffect, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import data from "./staffdata";
import colors from "../../assets/colors/colors";

export default function AddStaff() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNo, setUserMobileNo] = useState("");
  const [userDesignation, setUserDesignation] = useState("");
  const [errortext, setErrortext] = useState("");

  const handleSubmitPress = () => {
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

    if (!userMobileNo) {
      setErrortext("Please Enter Phone number");
      return;
    } else if (!userMobileNo.substring(3).match(isPhoneNo)) {
      setErrortext("Please enter valid Phone number.");
      return;
    }

    if (!userDesignation) {
      setErrortext("Please fill City");
      return;
    }

    const requestBody = {
      query: `mutation {
          createStaff(staffInput: { 
            name: "${userName}", 
            Designation: "${userDesignation}",
            email: "${userEmail}",
            phone: "${userMobileNo}"
          }){
            _id
            name
            password
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
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <FontAwesome5 name="user-edit" size={50} color="white" />
            </View>
            <Text style={styles.loginTitleText}>Add Staff</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(UserName) => setUserName(UserName)}
                underlineColorAndroid="#f000"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Designation</Text>
              <TextInput
                style={styles.input}
                placeholder="Occupation"
                onChangeText={(userDesignation) =>
                  setUserDesignation(userDesignation)
                }
                underlineColorAndroid="#f000"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                onChangeText={(userMobileNo) => setUserMobileNo(userMobileNo)}
                underlineColorAndroid="#f000"
                keyboardType="numeric"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>

            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.5}
              onPress={() => console.log("Added")}
            >
              <Text style={styles.loginButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  bigCircle: {
    width: Dimensions.get("window").height * 0.7,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: colors.aqua,
    borderRadius: 1000,
    position: "absolute",
    right: Dimensions.get("window").width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.4,
    height: Dimensions.get("window").height * 0.4,
    backgroundColor: colors.aqua,
    borderRadius: 1000,
    position: "absolute",
    bottom: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.3,
  },
  centerizedView: {
    width: "100%",
    top: "15%",
  },
  authBox: {
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: colors.teal,
    borderRadius: 1000,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: -50,
    marginBottom: -50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    color: colors.darkTeal,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  hr: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#444",
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    color: colors.darkTeal,
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#dfe4ea",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: colors.teal,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 16,
  },
});
