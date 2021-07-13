import React, { userInputRef, useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  View,
  Picker,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import Moment from "moment";
import { Ionicons } from "@expo/vector-icons";
export default function AppointmentSummary({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    userName: userName,
    userAge: userAge,
    usergender: usergender,
    date: date,
    DataTitle: DataTitle,
  } = route.params;

  let date1 = new Date(date);
  let appointmentdate =
    date1.getDate() + "-" + date1.getMonth() + "-" + date1.getYear();

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
          <Text style={styles.title}>Appoitment Details</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.SectionStyle}>
              <Text style={styles.left1}>Name:</Text>
              <Text style={styles.left2}>{userName}</Text>
            </View>
            <View style={styles.SectionStyle1}>
              <Text style={styles.right1}>Age:</Text>
              <Text style={styles.right2}>{userAge}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.SectionStyle}>
              <Text style={styles.left1}>Patient Sex:</Text>
              <Text style={styles.left2}>{usergender}</Text>
            </View>
            <View style={styles.SectionStyle1}>
              <Text style={styles.right1}>Patient Id:</Text>
              <Text style={styles.right2}>d-12</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.SectionStyle}>
              <Text style={styles.left1}>Chamber:</Text>
              <Text style={styles.left2}>General Ward</Text>
            </View>
            <View style={styles.SectionStyle1}>
              <Text style={styles.right1}>Room:</Text>
              <Text style={[styles.right2]}>209</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.SectionStyle}>
              <Text style={styles.left1}>Hospital:</Text>
              <Text style={[styles.left2]}>{DataTitle}</Text>
            </View>

            <View style={styles.SectionStyle1}>
              <Text style={styles.right1}>Category:</Text>
              <Text style={styles.right2}>Covid</Text>
            </View>
          </View>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Ionicons
                    name="checkmark-circle"
                    style={{ color: colors.teal, marginTop: -20 }}
                    size={80}
                  />
                  <Text style={styles.Sentrequesttext}>
                    Successfully Sent Your Request
                  </Text>
                  <Pressable
                    style={styles.modalbuttonStyle}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.okTextStyle}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonTextStyle}>Send Appoitment Request</Text>
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
    fontSize: 16,
    marginTop: 20,
    marginRight: -17,
    margin: 10,
    borderBottomColor: "black",
  },
  SectionStyle1: {
    flex: 1,
    textAlign: "right",
    marginTop: 20,
    margin: 10,
    marginBottom: 10,
    borderBottomColor: "black",
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: "black",
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalbuttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    width: 150,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: -30,
  },
  box: {
    borderWidth: 0,
    borderRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 60,
    // marginBottom: 50,
    height: 630,
    width: 330,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
  },

  left1: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
    color: colors.blackteal,
  },
  left2: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
    color: colors.teal,
  },
  right1: {
    flex: 1,
    fontSize: 16,
    textAlign: "right",
    marginLeft: 10,
    marginRight: 10,
    color: colors.blackteal,
  },
  right2: {
    fontSize: 16,
    textAlign: "right",
    marginLeft: 10,
    marginRight: 10,
    color: colors.teal,
  },

  buttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    width: 300,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 140,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  okTextStyle: {
    marginBottom: 5,
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  Sentrequesttext: {
    marginTop: 0,
    fontSize: 16,
    color: "black",
    marginBottom: 50,
    fontWeight: "bold",
  },
});
