import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  Alert,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import { AntDesign } from "@expo/vector-icons";

const staffCard = ({ detail, navigation }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{ height: 90 }}
          onPress={() => navigation.navigate("Staff Detail", { id: detail.id })}
        >
          <View style={styles.topTextView}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 17 }]}>
              {detail.patientName}
            </Text>
          </View>

          <View style={styles.topMiddleView}>
            <View style={styles.textView}>
              <Text style={[styles.text, { color: colors.darkTeal }]}>
                Designation:{" "}
              </Text>
              <Text style={[styles.text, { marginLeft: 3 }]}>
                {detail.Occupation}
              </Text>
            </View>
            <View
              style={{
                transform: [{ translateY: -35 }],
                marginLeft: 260,
                paddingVertical: -70,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    "Confirmation",
                    "Are you sure you want to delete this staff member?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          alert("Deleted");
                        },
                      },
                    ],
                    { cancelable: false }
                  );
                }}
              >
                <AntDesign name="deleteuser" size={30} color="#3AAFA9" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default staffCard;

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
    height: 100,
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
    width: "70%",
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
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
