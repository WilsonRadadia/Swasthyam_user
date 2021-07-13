import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";

const PAGE_WIDTH = Dimensions.get("window").width;
const PAGE_HEIGHT = Dimensions.get("window").height;
const PAGES = [
  {
    title: "Thousands of Doctor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
    backgroundColor: colors.teal,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Book a Appoitment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
    backgroundColor: colors.teal,
    image:
      "https://images.unsplash.com/photo-1522241112606-b5d35a468795?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Find best doctor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
    backgroundColor: colors.teal,
    image:
      "https://images.unsplash.com/photo-1601972599748-19fe5a7e756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
  },
];

const FirstThreeScreens = ({ navigation }) => {
  let scroll = new Animated.Value(0);

  const position = Animated.divide(scroll, PAGE_WIDTH);
  const backgroundColor = position.interpolate({
    inputRange: PAGES.map((_, i) => i),
    outputRange: PAGES.map((p) => p.backgroundColor),
  });

  // onpressgetstarted = () => {
  //   navigation.navigate("SignIn");
  // };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[StyleSheet.absoluteFill, { backgroundColor, opacity: 0.8 }]}
      />

      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scroll } } },
        ])}
      >
        {PAGES.map((page, i) => (
          <View key={i} style={styles.page}>
            <View style={[styles.card]}>
              <Animated.View
                style={[
                  styles.frame,
                  styles.shadow,
                  {
                    transform: [
                      {
                        translateX: Animated.multiply(
                          Animated.add(position, -i),
                          -200
                        ),
                      },
                    ],
                  },
                ]}
              >
                <Animated.Image
                  source={{ uri: page.image }}
                  style={styles.photo}
                />
              </Animated.View>
              <View style={styles.box}>
                <Text style={styles.title}>{page.title}</Text>
                <Text style={styles.desc}>{page.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      <TouchableOpacity
        style={[styles.button, { zIndex: 1 }]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.buttonText}>{"GET STARTED"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstThreeScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    textAlign: "center",
    borderWidth: 0,
    borderRadius: 15,
    borderColor: colors.teal,
    padding: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 400,
    marginBottom: 0,
    height: 350,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.tealBlack,
    textAlign: "center",
  },
  desc: {
    marginTop: 30,
    fontSize: 16,
    color: "black",
    backgroundColor: "transparent",
    lineHeight: 25,
    textAlign: "center",
  },
  page: {
    width: PAGE_WIDTH,
  },
  card: {
    position: "absolute",
    // margin: 12,
    marginTop: 40,
    // left: 12,
    top: 0,
    right: 0,
    borderRadius: 8,
    // paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 140,
  },
  frame: {
    position: "absolute",
    left: 0,
    // bottom: 160,
    borderRadius: (PAGE_WIDTH - 100) / 2,
    height: PAGE_WIDTH - 100,
    width: PAGE_WIDTH - 100,
    // margin: 50,
  },
  button: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.3)",
    margin: 12,
    left: PAGE_WIDTH / 2 - 100,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30,
  },
  buttonText: {
    margin: 15,
    marginLeft: 50,
    marginRight: 40,
    color: "#fff",
    fontSize: 14,
  },
  photo: {
    flex: 1,
    width: PAGE_WIDTH,
    height: 200,
    borderBottomLeftRadius: 200 / 2,
    borderBottomRightRadius: 200 / 2,
  },
});
