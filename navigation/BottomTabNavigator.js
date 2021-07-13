import { Ionicons, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../assets/colors/colors";
import * as React from "react";
import MyHospitalNav from "./MyHospitalNav";
import DoctorNav from "./DoctorNav";
import AppointmentsNav from "./AppointmentsNav";
import { Text } from "react-native";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="tabHome"
      tabBarOptions={{
        activeTintColor: colors.darkTeal,
        activeBackgroundColor: colors.white,
        inactiveBackgroundColor: colors.white,
        showLabel: true,
        keyboardHidesTabBar: "true",
      }}
    >
      <BottomTab.Screen
        name="My Hospital"
        component={MyHospitalNav}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="hospital-alt"
              color={focused ? colors.darkTeal : color}
              size={focused ? 30 : 28}
              style={{ marginBottom: -3 }}
            />
          ),

          tabBarLabel: ({ focused }) =>
            focused && (
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                My Hospital
              </Text>
            ),
        }}
      />

      <BottomTab.Screen
        name="tabHome"
        component={AppointmentsNav}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={focused ? 32 : 30}
              style={{ marginBottom: -3 }}
              name="home"
              color={focused ? colors.darkTeal : color}
            />
          ),
          tabBarLabel: ({ focused, color }) =>
            focused && (
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Home</Text>
            ),
        }}
      />

      <BottomTab.Screen
        name="Doctors"
        component={DoctorNav}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Fontisto
              size={focused ? 32 : 30}
              style={{ marginBottom: -3 }}
              name="doctor"
              color={focused ? colors.darkTeal : color}
            />
          ),
          tabBarLabel: ({ focused }) =>
            focused && (
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Doctors</Text>
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
