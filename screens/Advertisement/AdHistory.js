import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import colors from "../../assets/colors/colors";
import flatlistdata from "./data";

const FlatListItem = (props) => {
  return (
    <View style={styles.display}>
      <Image
        source={{ uri: props.item.uri }}
        style={{ height: 100, width: 170, marginLeft: 10 }}
      ></Image>

      <View style={styles.dates}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Start Date: {props.item.startdate}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          End Date: {props.item.enddate}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Price: {props.item.Price}
        </Text>
      </View>
    </View>
  );
};

export default function AdHistory() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* <View
        style={{
          backgroundColor: colors.aqua,
          borderBottomStartRadius: 0,
          borderBottomEndRadius: 120,
          minHeight: 100,
        }}
      >
        <Text style={styles.heading}>Advertisement History</Text>
      </View>

      <FlatList
        style={styles.listitems}
        data={flatlistdata}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <FlatListItem item={item} index={index}></FlatListItem>;
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    marginTop: -110,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },
  display: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },
  spacing: {
    marginTop: 10,
  },
  dates: {
    marginRight: 10,
    marginLeft: 5,
  },
  listitems: {
    marginTop: 10,
  },
});
