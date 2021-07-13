import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import colors from "./assets/colors/colors";

export default function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    Font.loadAsync({
      SpaceMonoRegular: require("./assets/fonts/SpaceMono-Regular.ttf"),
    });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar animated style="light" backgroundColor={colors.darkTeal} />
      </SafeAreaProvider>
    );
  }
}
