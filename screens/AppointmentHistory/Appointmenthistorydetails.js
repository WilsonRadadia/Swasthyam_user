import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Alert,
  ScrollView,
} from "react-native";
import colors from "../../assets/colors/colors";
import data from "./Appointmenthistorydata";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native";

const appointmentInfo = ({ route }) => {
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
  const [isreviewsubmitted, setIsreviewsumbitted] = useState(false);
  const [isCancelDisable, setIsCancelDisable] = useState(false);
  const [isDoneDisable, setIsDoneDisable] = useState(false);
  const [isNotVisitedDisable, setIsNotVisitedDisable] = useState(false);
  const [NotVisitedDisable, setNotVisitedDisable] = useState(false);

  const [DoneDisable, setDoneDisable] = useState(false);
  const [CancelDisable, setCancelDisable] = useState(false);

  const [doneStatus, setDoneStatus] = useState("Visited");

  function visited() {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to set appointment as visited?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setCancelDisable(true);
            setDoneDisable(true);
            setNotVisitedDisable(true);
            setIsCancelDisable(true);
            setIsNotVisitedDisable(true);
            setIsreviewsumbitted(true);
            setDoneStatus("Review Submitted");
          },
        },
      ],
      { cancelable: false }
    );
  }
  function submitted() {
    setIsreviewsumbitted(true);
  }

  function reviewsubmit() {
    isreviewsubmitted ? (
      <Text>hello</Text>
    ) : (
      <TextInput
        style={[isreviewsubmitted ? styles.reviewsubmitted : styles.inputStyle]} //styles.inputStyle}
        multiline
        numberOfLines={4}
        placeholder={"Review"}
        onChange={(add) => setAddress(add)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 35 }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.infoContainer, UpAnim.getLayout()]}>
          <View style={styles.nameView}>
            <Text style={styles.name}>{obj.patientName}</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "gray",
                marginTop: 10,
              }}
            >
              25 Male
            </Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Appointment Time: </Text>
            <Text style={[styles.text]}>{obj.appointmentTime}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Symptoms: </Text>
            <Text style={[styles.text]}>{obj.disease}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Slot: </Text>
            <Text style={[styles.text]}>{obj.Slot}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Review: </Text>
            <View
              style={[
                styles.SectionStyle,
                {
                  minHeight: 100,
                },
              ]}
            >
              <TextInput
                style={[styles.inputStyle]}
                multiline
                numberOfLines={4}
                placeholder={"Review"}
                editable={!isreviewsubmitted}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={DoneDisable}
              style={[
                styles.doneButton,
                isDoneDisable ? styles.hideButton : "",
                isNotVisitedDisable && isCancelDisable
                  ? [styles.updatedButton, { backgroundColor: "grey" }]
                  : "",
              ]}
              onPress={() => visited()}
            >
              <Text
                style={
                  doneStatus === "Visited"
                    ? styles.buttonText
                    : styles.textUpdated
                }
              >
                {doneStatus === "Review Submitted" ? (
                  doneStatus
                ) : (
                  <Text>Submit Review</Text>
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default appointmentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.teal,
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
    marginRight: 20,
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
    //flexDirection: "column",
  },
  nameView: {
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 20,
    flexDirection: "column",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    width: 230,
    marginTop: 20,
    marginRight: -17,
    margin: 10,
    marginLeft: 15,
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
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 30,
    flexDirection: "column",
  },

  mainText: {
    color: colors.darkTeal,
    fontSize: 18,
  },

  buttonContainer: {
    width: "80%",
    alignSelf: "center",
    height: 40,
    marginTop: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
  },

  cancelButton: {
    // flex: 1,
    margin: 2,
    width: 50,
    marginRight: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255, 0, 0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },

  doneButton: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    width: 250,
    color: colors.white,
    borderColor: "white",
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 25,
  },

  notVisitedButton: {
    // flex: 1,
    margin: 2,
    marginLeft: 1,
    width: 50,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    color: colors.white,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 7,
  },

  textUpdated: {
    fontSize: 20,
    marginTop: 5,
    color: colors.white,
    fontWeight: "bold",
  },

  hideButton: {
    display: "none",
  },

  updatedButton: {
    borderLeftWidth: 0,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  inputStyle: {
    flex: 1,
    color: "#616A6B",
    backgroundColor: "transparent",
    shadowColor: colors.aqua,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
    shadowOffset: { width: 5, height: 5 },
    borderWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
  reviewsubmitted: {},
});
