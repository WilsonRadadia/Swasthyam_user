import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";

const drawerBar = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <FontAwesome5
        name="bars"
        style={{ marginLeft: 10 }}
        size={30}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

export default drawerBar;
