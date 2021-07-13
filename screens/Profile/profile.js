import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { FAB, Badge } from "react-native-paper";
import {
  AntDesign,
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StatusBar } from "expo-status-bar";

export default function Profile({ navigation }) {
  const [email, setEmail] = useState("abc@gmail.com");
  const [gender, setGender] = useState("Male");
  const [name, setName] = useState("Wilson Radadia");
  const [age, setAge] = useState("20");
  const [phone, setPhone] = useState(1234567890);
  const [diesease, setDiesease] = useState("Fever");
  const [city, setCity] = useState("Junagadh");
  const [password, setPassword] = useState("XXXXXXXX");

  return (
    <View style={styles.container}>
      <StatusBar animated style="dark" backgroundColor={colors.darkTeal} />
      <View style={styles.box}>
        <FAB
          style={styles.fab}
          icon={() => <AntDesign name="edit" size={24} color="white" />}
          color={colors.white}
          onPress={() => navigation.navigate("EditProfile")}
        />

        <View style={styles.personalinfo}>
          <Text style={styles.userName}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.userGendertxt}>Gender:</Text>
            <Text style={styles.userGender}> {gender}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.useragetxt}>Age:</Text>
            <Text style={styles.userage}> {age}</Text>
          </View>
        </View>

        <View>
          <View style={{ marginTop: -20 }}>
            <TouchableOpacity
              style={styles.personaldetails}
              activeOpacity={0.5}
            >
              <Ionicons
                style={{ marginTop: 8, color: colors.darkTeal }}
                name="call"
                size={24}
              />
              <Text style={styles.inputtext}>{phone}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.personaldetails} activeOpacity={0.5}>
            <Entypo
              style={{ marginTop: 8, color: colors.darkTeal }}
              name="mail"
              size={24}
            />
            <Text style={styles.inputtext}>{email}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.personaldetails} activeOpacity={0.5}>
            <MaterialIcons
              style={{ marginTop: 8, color: colors.darkTeal }}
              name="location-city"
              size={24}
            />
            <Text style={styles.inputtext}>{city}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.personaldetails} activeOpacity={0.5}>
            <FontAwesome
              style={{ marginTop: 8, color: colors.darkTeal }}
              name="lock"
              size={24}
            />
            <Text style={styles.inputtext}>{password}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.teal,
  },

  fab: {
    position: "absolute",
    marginTop: 10,
    zIndex: 1,
    bottom: 10,
    marginLeft: 280,
    backgroundColor: colors.darkTeal,
    marginBottom: 45,
  },

  personaldetails: {
    color: "#616A6B",
    backgroundColor: colors.aqua,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    borderColor: colors.aqua,
    elevation: 9,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputtext: {
    color: "black",
    paddingVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
  userGender: {
    marginTop: 10,
    color: "black",
    fontSize: 16,
    marginLeft: 10,
  },
  userGendertxt: {
    marginTop: 10,
    color: colors.teal,
    fontSize: 16,
    marginLeft: 30,
  },
  userName: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 30,
    fontWeight: "bold",
  },
  box: {
    borderWidth: 0,
    borderRadius: 25,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 50,
    height: 630,
    width: 360,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
    marginBottom: -20,
  },
  personalinfo: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 50,
    height: 100,
    width: 300,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
    shadowRadius: 3.84,
  },
  userage: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
  },
  useragetxt: {
    color: colors.teal,
    fontSize: 16,
    marginLeft: 30,
  },
});
