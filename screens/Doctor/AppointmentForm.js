import React, { userInputRef, useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  View,
  Picker,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
export default function Doctors({ navigation, route }) {
  const {
    date: date,
    DataFee: DataFee,
    selected: selected,
    Timeslot: Timeslot,
    DataName: DataName,
    DataCate: DataCate,
    DataHospital: DataHospital,
  } = route.params;
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [address, setAddress] = useState("");
  const [UserPhone, setUserPhone] = useState("");
  const [selectedValue, setSelectedValue] = useState("Male");

  const checkandnavigate = () => {
    var phonenumberlength = UserPhone;
    if (
      userName != "" &&
      userAge != "" &&
      UserPhone != "" &&
      address != "" &&
      phonenumberlength.toString().length == 10
    ) {
      navigation.navigate("AppointmentSummary", {
        userName: userName,
        userAge: userAge,
        usergender: selectedValue,
        date: date,
        DataFee: DataFee,
        selected: selected,
        Timeslot: Timeslot,
        DataName: DataName,
        DataCate: DataCate,
        DataHospital: DataHospital,
      });
    } else {
      alert("Please Fill The Complete Form");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar animated style="dark" backgroundColor={colors.darkTeal} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          backgroundColor: colors.teal,
          alignContent: "center",
        }}
      ></ScrollView>
      <View style={styles.box}>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Name"
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
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 4 }}>
            <View style={{ marginLeft: 10 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAge) => setUserAge(UserAge)}
                underlineColorAndroid="#f000"
                placeholder="Age"
                placeholderTextColor="rgba(23, 37, 42,0.5)"
                ref={userInputRef}
                maxLength={2}
                keyboardType="phone-pad"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  userInputRef.current && userInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: colors.aqua,
                backgroundColor: "white",
                shadowOpacity: 0.8,
                elevation: 9,
                shadowRadius: 15,
                marginLeft: 10,
              }}
            >
              <Picker
                selectedValue={selectedValue}
                style={styles.dropdownlist}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPhone) => setUserPhone(UserPhone)}
              underlineColorAndroid="#f000"
              placeholder="Phone"
              placeholderTextColor="rgba(23, 37, 42,0.5)"
              ref={userInputRef}
              maxLength={10}
              keyboardType="phone-pad"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                userInputRef.current && userInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View
            style={[
              styles.SectionStyle,
              {
                minHeight: 100,
              },
            ]}
          >
            <TextInput
              style={styles.inputStyle}
              multiline
              numberOfLines={4}
              placeholder={"Address"}
              onChange={(add) => setAddress(add)}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => checkandnavigate()}
          >
            <Text style={styles.buttonTextStyle}>NEXT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.teal,
    justifyContent: "flex-start",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    width: 300,
    marginTop: 20,
    marginRight: -17,
    margin: 10,
    marginLeft: 15,
  },
  SectionStyle1: {
    flexDirection: "row",
    height: 50,
    width: 145,
    marginTop: 10,
    marginRight: -17,
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: colors.aqua,
    backgroundColor: "white",
    shadowOpacity: 0.8,
    elevation: 9,
    shadowRadius: 15,
  },
  SectionStyle2: {
    flexDirection: "row",
    height: 50,
    width: 145,
    marginLeft: 10,
  },

  inputStyle: {
    flex: 1,
    width: 70,
    color: "#616A6B",
    backgroundColor: "transparent",
    shadowColor: colors.aqua,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
    shadowOffset: { width: 5, height: 5 },
    borderWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
  box: {
    borderWidth: 0,
    borderRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: "white",
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 50,
    height: 630,
    width: 330,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
  },
  buttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    width: 300,
    color: colors.white,
    borderColor: "white",
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 125,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownlist: {
    height: 50,
    width: 150,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    shadowRadius: 15,
    marginLeft: 80,
    marginRight: -10,
  },
});
