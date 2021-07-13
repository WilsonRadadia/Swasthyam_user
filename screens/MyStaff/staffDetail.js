import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../../assets/colors/colors";
import data from "./staffdata";
import { FontAwesome5 } from "@expo/vector-icons";

export default function detailstaff({ route, navigation, detail }) {
  const { id } = route.params;
  let obj = data.find((obj) => obj.id == id);

  const UpAnim = useRef(new Animated.ValueXY({ x: 0, y: 500 })).current;
  const SideAnim = useRef(new Animated.ValueXY({ x: -200, y: 0 })).current;

  useEffect(() => {
    moveUp();
    moveSide();
  }, []);

  const moveUp = () => {
    Animated.spring(UpAnim, {
      toValue: { x: 0, y: 0 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const moveSide = () => {
    Animated.spring(SideAnim, {
      toValue: { x: 0, y: 0 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            backgroundColor: colors.aqua,
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 120,
            minHeight: 100,
          },
          SideAnim.getLayout(),
        ]}
      >
        <Text style={styles.heading}>Staff Detail</Text>
      </Animated.View>

      <Animated.View style={[styles.infoContainer, UpAnim.getLayout()]}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{obj.patientName}</Text>
        </View>

        <View style={styles.textView}>
          <Text style={[styles.mainText]}>Designation: </Text>
          <Text style={[styles.text]}>{obj.Occupation}</Text>
        </View>

        <View style={styles.textView}>
          <Text style={[styles.mainText]}>Mobile No: </Text>
          <Text style={[styles.text]}>+91 7016832962</Text>
        </View>

        <View style={styles.textView}>
          <Text style={[styles.mainText]}>Email: </Text>
          <Text style={[styles.text]}>dharmeshrathod@gmail.com</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit Staff", { id: obj.id })}
          >
            <FontAwesome5 name="user-edit" size={36} color={colors.teal} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
  },

  heading: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },
  text: {
    fontSize: 16,
    color: "black",
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    shadowOpacity: 0.8,
  },
  textView: {
    marginLeft: 25,
    marginTop: 12,
    flexDirection: "column",
  },
  nameView: {
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 20,
    flexDirection: "column",
  },
  infoContainer: {
    backgroundColor: colors.white,
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 30,
    marginRight: 25,
    paddingTop: 15,
    paddingBottom: 30,
    flexDirection: "column",
  },

  buttonContainer: {
    paddingTop: 20,
    width: "20%",
    alignSelf: "center",
    alignContent: "center",
    height: 40,
    marginTop: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    color: colors.darkTeal,
    fontSize: 18,
  },
});
