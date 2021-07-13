import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import CovidCareInfo from "../screens/CovidCare/covidInfo";
import colors from "../assets/colors/colors";
import DrawerBar from "../components/DrawerBar";
import NotificationIcon from "../components/NotificationIcon";

const CovidCare = createStackNavigator();

export default function CovidCareNav({ navigation }) {
  return (
    <CovidCare.Navigator>
      <CovidCare.Screen
        name="Covid Care"
        component={CovidCareInfo}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Covid Care",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
          headerRight: () => <NotificationIcon navigation={navigation} />,
        }}
      />
    </CovidCare.Navigator>
  );
}
