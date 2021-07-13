import React from "react";
import colors from "../../assets/colors/colors";
import { AirbnbRating } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import FeedbackSVG from "../../assets/SVG/FeedbackSVG";

const Feedback = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* <ScrollView>
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <FeedbackSVG height="200" width="150%" />
        </View>

        <View>
          <Text style={styles.subheading}>
            Tell us what you love about the app, or what we could be doing
            better.{" "}
          </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.t_input}>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder={"FeedBack"}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.rating}>
          <AirbnbRating
            count={5}
            defaultRating={0}
            reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
            onFinishRating={(review) => console.log(review)}
            showRating
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={[styles.buttonStyle, { width: 100 }]}>
            <Text style={styles.buttonTextStyle}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 40,
    marginTop: 48,
    marginLeft: 50,
    fontWeight: "bold",
    color: colors.teal,
  },

  heading2: {
    fontSize: 40,
    marginTop: -10,
    marginLeft: 68,
    fontWeight: "bold",
    color: colors.teal,
  },

  subheading: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 23,
    marginRight: 30,
    fontWeight: "bold",
    color: colors.darkTeal,
  },

  info: {
    marginTop: 30,
    marginLeft: 30,
  },

  input: {
    borderColor: "black",
    fontSize: 15,
    marginTop: 12,
    marginRight: 30,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    borderRadius: 4,
    alignItems: "center",
    lineHeight: 15,
    textAlignVertical: "top",
  },

  rating: {
    // marginTop: 20,
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
});

export default Feedback;
