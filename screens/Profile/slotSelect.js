import * as React from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import { Chip } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import colors from "../../assets/colors/colors";

const slotSelect = () => {
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const select = (id) => {
    let prev = [...selected];
    prev[id] = !prev[id];
    setSelected(prev);
  };
  const dataSource = [
    "09-10",
    "10-11",
    "11-12",
    "12-13",
    "13-14",
    "14-15",
    "15-16",
    "16-17",
    "17-18",
    "18-19",
    "19-20",
    "20-21",
  ];
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      {dataSource.map((item, index) => {
        return (
          <View
            style={{
              margin: 5,
              flexWrap: "wrap",
            }}
          >
            <Chip
              key={index}
              selected={selected[index]}
              mode="outlined" //changing display mode, default is flat.
              height={30} //give desirable height to chip
              textStyle={{ color: "white", fontSize: 15 }} //label properties
              style={{ backgroundColor: colors.teal }} //display diff color BG
              onPress={() => select(index)}
            >
              {item}
            </Chip>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  chip: {
    textAlign: "center",
    paddingLeft: 5,
    marginLeft: 2,
    marginTop: 5,
  },
});

export default slotSelect;
