import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useReducer, createContext, useContext } from "react";
import NotFoundScreen from "../screens/NotFoundScreen";
import changePassword from "../screens/SignIn/changePassword";
import DrawerNavigator from "./DrawerNavigator";
import SignUp from "../screens/SignUp/SignUp";
import SignIn from "../screens/SignIn/SignIn";
import FirstThreeScreens from "../screens/First3Screens/FirstThreeScreens";
import Notifications from "../screens/Notification/notification";

import { initialState, reducer } from "./contextAPI";

import ForgotPassword from "../screens/SignIn/ForgotPassword";
// import ImagePicker from "../screens/ImagePicker/ImagePicker";

export const Context = createContext();
export default function Navigation() {
  // const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Context.Provider>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const [state, dispatch] = useContext(Context);
  // console.log("user", state.user, state.isSignedIn);

  return state.isSignedIn ? (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Drawer"
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="FirstThreeScreens"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FirstThreeScreens" component={FirstThreeScreens} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="changePassword" component={changePassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
