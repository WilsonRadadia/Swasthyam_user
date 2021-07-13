import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ViewDoctors from "../screens/Doctor/Doctors";
import colors from "../assets/colors/colors";
import DrawerBar from "../components/DrawerBar";
import NotificationIcon from "../components/NotificationIcon";
import DoctorDetails from "../screens/Doctor/DoctorDetails";
import SetAppointment from "../screens/Doctor/SetAppointment";
import AppointmentForm from "../screens/Doctor/AppointmentForm";
import AppointmentSummary from "../screens/Doctor/AppointmentSummary";
const Doctors = createStackNavigator();

export default function DoctorsNav({ navigation }) {
  return (
    <Doctors.Navigator>
      <Doctors.Screen
        name="View Doctors"
        component={ViewDoctors}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Doctors",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
          headerRight: () => <NotificationIcon navigation={navigation} />,
        }}
      />
      <Doctors.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Doctor Details",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <Doctors.Screen
        name="SetAppointment"
        component={SetAppointment}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Set Apponitment",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <Doctors.Screen
        name="AppointmentForm"
        component={AppointmentForm}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Appointment Form",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <Doctors.Screen
        name="AppointmentSummary"
        component={AppointmentSummary}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Appointment Summary",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </Doctors.Navigator>
  );
}
