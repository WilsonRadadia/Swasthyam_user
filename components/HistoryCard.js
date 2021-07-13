import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";

const HistoryCard = ({ detail, navigation }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{ height: 90 }}
          onPress={() =>
            navigation.navigate("HistoryDetail", {
              id: detail.id,
            })
          }
        >
          <View style={styles.topTextView}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 17 }]}>
              {detail.patientName}
            </Text>
            <Text style={[styles.text, { fontWeight: "bold", color: "gray" }]}>
              {detail.date}
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

export default HistoryCard;

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
    height: 90,
    justifyContent: "space-between",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
  },

  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "100",
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
