import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AdScreen from "../screens/Advertisement/advertisement";
import PaymentInfo from "../screens/Advertisement/paymentInfo";
import colors from "../assets/colors/colors";

import DrawerBar from "../components/DrawerBar";
import NotificationIcon from "../components/NotificationIcon";

const Advertisement = createStackNavigator();

export default function AdvertisementNav({ navigation }) {
  return (
    <Advertisement.Navigator>
      <Advertisement.Screen
        name="Advertisement"
        component={AdScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Advertisement",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
          headerRight: () => <NotificationIcon navigation={navigation} />,
        }}
      />
      <Advertisement.Screen
        name="Payment Details"
        component={PaymentInfo}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Payment Details",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </Advertisement.Navigator>
  );
}
