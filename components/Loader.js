import React from "react";
import { StyleSheet, Text, View, Modal, ActivityIndicator } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
const Loader = ({ loading }) => {
  return (
    <AnimatedLoader
      visible={loading}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../assets/JSON/loader.json")}
      animationStyle={styles.lottie}
      speed={0.8}
    ></AnimatedLoader>
  );
};

export default Loader;

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
  },
});
