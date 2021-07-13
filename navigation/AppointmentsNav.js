import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ActiveAppointments from "../screens/Appointments/activeAppointments";
import colors from "../assets/colors/colors";
import DrawerBar from "../components/DrawerBar";
import NotificationIcon from "../components/NotificationIcon";
import AppointmentInfo from "../screens/Appointments/appointmentInfo";

const Appointments = createStackNavigator();

export default function AppointmentsNav({ navigation }) {
  return (
    <Appointments.Navigator initialRouteName="Appointments">
      <Appointments.Screen
        name="Appointments"
        component={ActiveAppointments}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Appointments",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
          headerRight: () => <NotificationIcon navigation={navigation} />,
        }}
      />
      <Appointments.Screen
        name="AppointmentDetail"
        component={AppointmentInfo}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Appointment Detail",
          headerTintColor: colors.aqua,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </Appointments.Navigator>
  );
}
