import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Avatar, Badge } from "react-native-paper";
import colors from "../../assets/colors/colors";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";

export default function editProfile() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [UserCity, setUserCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errortext, setErrortext] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar animated style="dark" backgroundColor={colors.darkTeal} />
      <View style={styles.box}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView enabled>
              <View style={{ marginTop: 7 }}></View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  // onChangeText={(UserName) => setUserName(UserName)}
                  underlineColorAndroid="#f000"
                  placeholder="Enter Name"
                  placeholderTextColor="rgba(23, 37, 42,0.5)"
                  // ref={userInputRef}
                  autoCapitalize="sentences"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    userInputRef.current && userInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  // onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                  underlineColorAndroid="#f000"
                  placeholder="Enter Email"
                  placeholderTextColor="rgba(23, 37, 42,0.5)"
                  keyboardType="email-address"
                  // ref={emailInputRef}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    emailInputRef.current && emailInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.inputStyle}
                  // onChangeText={(phoneNum) => setPhoneNumberWithCode(phoneNum)}
                  underlineColorAndroid="#f000"
                  placeholder="Enter Mobile No."
                  placeholderTextColor="rgba(23, 37, 42,0.5)"
                  keyboardType="phone-pad"
                  autoCompleteType="tel"
                  textContentType="telephoneNumber"
                  // ref={phoneInputRef}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    phoneInputRef.current && phoneInputRef.current.focus()
                  }
                  // editable={!verificationId}
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  // onChangeText={(UserName) => setUserName(UserName)}
                  underlineColorAndroid="#f000"
                  placeholder="New Password"
                  placeholderTextColor="rgba(23, 37, 42,0.5)"
                  // ref={userInputRef}
                  autoCapitalize="sentences"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    userInputRef.current && userInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  // onChangeText={(UserName) => setUserName(UserName)}
                  underlineColorAndroid="#f000"
                  placeholder="Re-Enter Password"
                  placeholderTextColor="rgba(23, 37, 42,0.5)"
                  // ref={userInputRef}
                  autoCapitalize="sentences"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    userInputRef.current && userInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  // onChangeText={(UserCity) => setUserCity(UserCity)}
                  underlineColorAndroid="#f000"
                  placeholder="City"
                  placeholderTextColor="rgba(23, 37, 42,0.5)"
                  autoCapitalize="sentences"
                  // ref={cityInputRef}
                  returnKeyType="next"
                  onSubmitEditing={Keyboard.dismiss}
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
                // onPress={handleSubmitButton}
                onPress={() => {}}
              >
                <Text style={styles.buttonTextStyle}>Edit</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.teal,
    paddingTop: "10%",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
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
    borderRadius: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 90,
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
    elevation: 9,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.aqua,
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
    borderRadius: 25,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 50,
    height: 630,
    width: 360,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
    marginBottom: -20,
  },
});
