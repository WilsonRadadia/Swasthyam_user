import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import data from "./data";
import HistoryCard from "../../components/HistoryCard";
import NoData from "../../assets/SVG/NoData";
import colors from "../../assets/colors/colors";

export default function appointmentHistory({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.bigCircle}></View>
      <View style={styles.smallCircle}></View>
      {data.length === 0 ? (
        <View style={[styles.container, { alignItems: "center" }]}>
          <NoData height="500" width="100%" />
          <Text style={{ fontFamily: "SpaceMonoRegular", fontSize: 30 }}>
            No Appointments!
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 10,
          }}
        >
          {data.map((info) => (
            <HistoryCard key={info.id} detail={info} navigation={navigation} />
          ))}
        </ScrollView>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
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
});
