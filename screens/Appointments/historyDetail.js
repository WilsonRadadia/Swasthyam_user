import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import data from "./data";
import colors from "../../assets/colors/colors";

const HistoryDetail = ({ route }) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.heading}>Detail Appointment History </Text>
        </Animated.View>

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
            <Text style={[styles.mainText]}>Disease: </Text>
            <Text style={[styles.text]}>{obj.disease}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Description: </Text>
            <Text style={[styles.text]}>none</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Status: </Text>
            <Text
              style={[
                styles.text,
                obj.status === "Accepted"
                  ? { color: "rgba(20, 90, 50,0.7)", fontWeight: "bold" }
                  : { color: "rgba(255,0,0,0.6)", fontWeight: "bold" },
              ]}
            >
              {obj.status}
            </Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Consulting Date: </Text>
            <Text style={[styles.text]}>{obj.Counsulting_date}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Consulting Time: </Text>
            <Text style={[styles.text]}>{obj.Counsulting_time}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={[styles.mainText]}>Review: </Text>
            <Text style={[styles.review]}>{obj.Review.substring(0, 50)}</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default HistoryDetail;

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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 18,
    color: colors.white,
  },
  titleBackground: {
    backgroundColor: colors.teal,
    marginTop: 50,
    width: "78%",
    height: 50,
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
    marginLeft: 20,
  },
  review: {
    fontSize: 16,
    color: "black",
    marginLeft: 20,
    marginRight: 40,
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
    marginTop: 20,
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
    justifyContent: "space-between",
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
    // flex: 1,
    margin: 2,
    width: 50,
    marginRight: 1,
    borderRadius: 10,
    backgroundColor: "rgba(20, 90, 50,0.6)",
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
