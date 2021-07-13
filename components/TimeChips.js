import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Chip } from "react-native-paper";
import { useState } from "react";
import colors from "../assets/colors/colors";

const slotSelect = ({ weekDay }) => {
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

  const showSlots = () => {
    let selectedDays = [];
    selected.map((item, itemId) => {
      if (item === true) {
        selectedDays.push(dataSource[itemId]);
      }
    });

    alert(`Selected Days:${selectedDays}`);
  };
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: colors.darkTeal,
          alignSelf: "center",
        }}
      >
        {weekDay}
      </Text>
      <View style={styles.content}>
        {dataSource.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                margin: 5,
                flexWrap: "wrap",
              }}
            >
              <Chip
                key={index}
                selected={selected[index]}
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
      <TouchableOpacity
        style={{
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.teal,
          width: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        onPress={() => {
          showSlots();
        }}
      >
        <Text style={{ fontSize: 20, color: colors.white }}>Save</Text>
      </TouchableOpacity>
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
  mainContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    backgroundColor: "white",
    justifyContent: "center",
  },
});

export default slotSelect;
