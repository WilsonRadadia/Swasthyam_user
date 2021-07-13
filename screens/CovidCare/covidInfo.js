import { ScrollView } from "react-native";
import React, { useState } from "react";
import colors from "../../assets/colors/colors";
import {
  View,
  Switch,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";

const covidInfo = () => {
  const [toggle, setToggle] = useState(false);

  const showAlert = () => {
    Alert.alert("Saved");
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        <View
          style={{
            backgroundColor: colors.aqua,
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 120,
            minHeight: 100,
          }}
        >
          <Text style={styles.heading}>Covid Care</Text>
        </View>

        <View style={styles.status}>
          <Text style={styles.text}>COVID Facity Available</Text>
          <Switch
            trackColor={{ false: "gray", true: colors.darkTeal }}
            thumbColor="gray"
            ios_backgroundColor="black"
            onValueChange={(value) => setToggle(value)}
            value={toggle}
          />
        </View>

        <View>
          <View />
          <Text style={styles.details}>Hospital Address: </Text>
          <Text style={styles.details1}>
            TRIMURTI Hospital, ABC Block, XYZ society, MNOCity,Pin Code:362001{" "}
          </Text>
          <View />
        </View>

        <View style={styles.info}>
          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of beds:</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of vacant beds:</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of ventilators:</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of beds in ICU:</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of available oxygen cyl.:</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.buttonStyle, { width: 100 }]}
            onPress={showAlert}
          >
            <Text style={styles.buttonTextStyle}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  status: {
    flexDirection: "row",
    fontSize: 70,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 50,
    justifyContent: "space-between",
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.darkTeal,
  },

  heading: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },

  details: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 20,
    marginRight: 20,
    fontWeight: "bold",
    color: colors.teal,
  },

  details1: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 15,
    color: "#616A6B",
  },

  info: {
    marginTop: 30,
    marginLeft: 20,
  },

  info1: {
    flexDirection: "row",
    marginVertical: 10,
    fontSize: 17,
    color: colors.teal,
  },

  buttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
  },

  input: {
    width: 50,
    height: 30,
    marginRight: 20,
    borderWidth: 1.5,
    fontSize: 20,
    borderBottomColor: "#000",
    borderColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },

  t_input: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default covidInfo;
