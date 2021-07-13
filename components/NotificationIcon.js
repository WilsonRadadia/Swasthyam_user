import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import colors from "../assets/colors/colors";

const NotificationIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
      <FontAwesome5
        name="bell"
        style={{ marginRight: 13 }}
        size={30}
        color={colors.white}
      />
      <Badge
        value="10"
        status="error"
        containerStyle={{
          position: "absolute",
          top: 0,
          right: 4,
        }}
      />
    </TouchableOpacity>
  );
};

export default NotificationIcon;
