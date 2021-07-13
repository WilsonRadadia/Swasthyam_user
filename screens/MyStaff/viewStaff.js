import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import data from "./staffdata";
import colors from "../../assets/colors/colors";
import Card from "../../components/staffCard";
import NoData from "../../assets/SVG/NoData";
import { FAB } from "react-native-paper";

export default function viewStaff({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <FAB
        style={styles.fab}
        icon="plus"
        animated={true}
        color={colors.white}
        onPress={() => navigation.navigate("Add Staff")}
      />
      <View style={styles.bigCircle}></View>
      <View style={styles.smallCircle}></View>
      <SafeAreaView style={{ flex: 1 }}>
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
              <Card key={info.id} detail={info} navigation={navigation} />
            ))}
          </ScrollView>
        )}
      </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    zIndex: 1,
    bottom: 10,
    backgroundColor: colors.darkTeal,
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
