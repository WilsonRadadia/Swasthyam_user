import React from "react";
import { Platform, StatusBar, View } from "react-native";
// import { getStatusBarHeight } from "react-native-status-bar-height";

function StatusBarPlaceHolder() {
  //const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : 0
  //   const STATUS_BAR_HEIGHT r= getStatusBarHeight();
  return (
    <View
      style={{
        width: "100%",
        height: 35,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}

export default StatusBarPlaceHolder;
