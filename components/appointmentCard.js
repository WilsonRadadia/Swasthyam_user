import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import colors from "../assets/colors/colors";
const appointmentCard = ({ detail, navigation }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{ height: 90 }}
          onPress={() =>
            navigation.navigate("HistoryDetails", { id: detail.id })
          }
        >
          <View style={styles.topTextView}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 17 }]}>
              {detail.patientName}
            </Text>
            <Text style={[styles.text, { fontWeight: "bold", color: "gray" }]}>
              {detail.receivedTime}
            </Text>
          </View>
          <View style={styles.topMiddleView}>
            <View style={styles.textView}>
              <Text style={[styles.text, { color: colors.darkTeal }]}>
                Time:{" "}
              </Text>
              <Text style={[styles.text, { marginLeft: 3 }]}>
                {detail.appointmentTime}
              </Text>
            </View>

            <View style={styles.textView}>
              <Text style={[styles.text, { color: colors.darkTeal }]}>
                Disease:{" "}
              </Text>
              <Text style={[styles.text, { marginLeft: 3 }]}>
                {truncate(detail.disease, 10)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default appointmentCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0)",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.darkTeal,
    shadowOpacity: 0.8,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 130,
    justifyContent: "space-between",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
  },

  buttonContainer: {
    height: 40,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.white,
    flexDirection: "row",
  },

  rejectButton: {
    flex: 1,
    margin: 2,
    marginRight: 1,
    borderRadius: 5,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },

  acceptButton: {
    flex: 1,
    margin: 2,
    marginLeft: 1,
    borderRadius: 5,
    backgroundColor: colors.teal,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    color: colors.white,
  },

  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "100",
  },

  textUpdated: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },

  hideButton: {
    display: "none",
  },

  updatedButton: {
    borderLeftWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  textView: {
    // marginLeft: 50,
    marginTop: 5,
    width: "50%",
    flexDirection: "row",
  },
  topTextView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topMiddleView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
