import { ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../assets/colors/colors";

const ReviewDetail = ({ route }) => {
  const { Data: Data } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          backgroundColor: colors.aqua,
          borderBottomStartRadius: 0,
          borderBottomEndRadius: 120,
          minHeight: 100,
        }}
      >
        <Text style={styles.heading}>Review Detail</Text>
      </View>

      <View style={styles.box}>
        <ScrollView
          style={{ height: 100, width: 250, marginLeft: -12, marginTop: -8 }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.content}>{Data.Name}</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.contenthead}>Gender: </Text>
              <Text style={styles.contents}>{Data.Gender}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.contenthead}>Age: </Text>
              <Text style={styles.contents}>{Data.Age}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.contenthead}>Consulting Date: </Text>
              <Text style={styles.contents}>{Data.Consulting_date}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.contenthead}>Disease: </Text>
              <Text style={styles.contents}>{Data.Disease}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.contenthead}>Ratings: </Text>
              <Text style={styles.contents}>{Data.Review_star} Star</Text>
            </View>

            <Text style={styles.contenthead}>Reviews: </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                color: colors.tealBlack,
                marginLeft: 20,
              }}
            >
              {Data.Review_text}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenthead: {
    fontSize: 19,
    marginTop: 10,
    color: colors.darkTeal,
    marginLeft: 20,
  },
  heading: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },
  content: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
    shadowOpacity: 0.8,
  },
  header: {
    padding: 10,
    marginTop: 60,
    height: 40,
    marginLeft: -20,
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: colors.teal,
    width: "78%",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contents: {
    marginTop: 13,
    fontSize: 16,
    color: "black",
  },
  box: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: colors.teal,
    padding: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    height: 420,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: colors.white,
  },
});

export default ReviewDetail;
