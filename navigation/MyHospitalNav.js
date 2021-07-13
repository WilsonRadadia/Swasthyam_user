import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import MyHospitalDetail from "../screens/MyHospital/hospitalDetail";
import colors from "../assets/colors/colors";
import DrawerBar from "../components/DrawerBar";
import NotificationIcon from "../components/NotificationIcon";
import hospitaldetailedinfo from "../screens/MyHospital/hospitaldetailedinfo";
import covidForm from "../screens/MyHospital/covidForm";
import covidsummary from "../screens/MyHospital/covidsummary";

const MyHospital = createStackNavigator();

export default function MyHospitalNav({ navigation }) {
  return (
    <MyHospital.Navigator headerMode="screen">
      <MyHospital.Screen
        name="Hospital"
        component={MyHospitalDetail}
        options={{
          headerTitle: "Hospitals",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
          headerRight: () => <NotificationIcon navigation={navigation} />,
        }}
      />
      <MyHospital.Screen
        name="Hospital Info"
        component={hospitaldetailedinfo}
        options={{
          headerTitle: "Hospital Info",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <MyHospital.Screen
        name="Covid Appointment"
        component={covidForm}
        options={{
          headerTitle: "Covid Appointment",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <MyHospital.Screen
        name="Covid Summary"
        component={covidsummary}
        options={{
          headerTitle: "Appointment Summary",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </MyHospital.Navigator>
  );
}
