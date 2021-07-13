import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../assets/colors/colors";
import * as React from "react";
import { useWindowDimensions } from "react-native";

import MyAppointmentsPage from "../screens/Appointments/activeAppointments";
import HelpPage from "../screens/HelpAndFeedback/help";
import FeedbackPage from "../screens/HelpAndFeedback/feedback";
import BottomTabNavigator from "./BottomTabNavigator";
import ProfilePage from "../screens/Profile/profile";
import EditProfile from "../screens/Profile/editProfile";
import AppointmentInfo from "../screens/Appointments/appointmentInfo";
import DrawerBar from "../components/DrawerBar";
import slotSelect from "../screens/Profile/slotSelect";
import AppointmentHistory from "../screens/AppointmentHistory/Appointmenthistory";
import AppointmentHistoryDetails from "../screens/AppointmentHistory/Appointmenthistorydetails";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
      initialRouteName="Home"
      overlayColor="rgba(255,255,255,0.5)"
      backBehavior="initialRoute"
      edgeWidth={50}
      drawerStyle={{ backgroundColor: colors.white }}
      drawerContentOptions={{
        activeTintColor: colors.darkTeal,
        activeBackgroundColor: colors.aqua,
        inactiveTintColor: colors.teal,
        itemStyle: { marginVertical: 10 },
      }}
      // drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeNav}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              name="home"
              color={colors.teal}
              size={27}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileNav}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="person"
              color={colors.teal}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Appointments"
        component={MyAppointmentsNav}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              name="list-ul"
              color={colors.teal}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryNav}
        options={{
          drawerLabel: "Appointment History",
          drawerIcon: () => (
            <FontAwesome5
              name="history"
              color={colors.teal}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Feedback & Suggestions"
        component={FeedbackNav}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="feedback"
              color={colors.teal}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Help & Support"
        component={HelpNav}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="contact-support"
              color={colors.teal}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const Home = createStackNavigator();

function HomeNav({ navigation }) {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Home.Screen name="Home" component={BottomTabNavigator} />
    </Home.Navigator>
  );
}

const Profile = createStackNavigator();

function ProfileNav({ navigation }) {
  return (
    <Profile.Navigator initialRouteName="Profile" headerMode="screen">
      <Profile.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerTitle: "My Profile",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerTitleStyle: { fontSize: 20 },
          headerStyle: {
            backgroundColor: colors.teal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
        }}
      />
      <Profile.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: "Edit Profile",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.teal,
          },
        }}
      />
      <Profile.Screen
        name="slot"
        component={slotSelect}
        options={{
          headerTitle: "Slots",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </Profile.Navigator>
  );
}

const MyAppointments = createStackNavigator();

function MyAppointmentsNav({ navigation }) {
  return (
    <MyAppointments.Navigator headerMode="screen">
      <MyAppointments.Screen
        name="My Appointments"
        component={MyAppointmentsPage}
        options={{
          headerTitle: "My Appointments",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
        }}
      />
      <MyAppointments.Screen
        name="AppointmentDetail"
        component={AppointmentInfo}
        options={{
          headerTitle: "Appointment Detail",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
        }}
      />
    </MyAppointments.Navigator>
  );
}

const History = createStackNavigator();

function HistoryNav({ navigation }) {
  return (
    <History.Navigator headerMode="screen">
      <History.Screen
        name="History"
        component={AppointmentHistory}
        options={{
          headerTitle: "History",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
        }}
      />
      <History.Screen
        name="HistoryDetails"
        component={AppointmentHistoryDetails}
        options={{
          headerTitle: "History Details",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </History.Navigator>
  );
}

const Help = createStackNavigator();

function HelpNav({ navigation }) {
  return (
    <Help.Navigator headerMode="screen">
      <Help.Screen
        name="Help & Support"
        component={HelpPage}
        options={{
          headerTitle: "Help & Support",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
        }}
      />
    </Help.Navigator>
  );
}

const Feedback = createStackNavigator();

function FeedbackNav({ navigation }) {
  return (
    <Feedback.Navigator headerMode="screen">
      <Feedback.Screen
        name="Feedback & Suggestions"
        component={FeedbackPage}
        options={{
          headerTitle: "Feedback & Suggestions",
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
        }}
      />
    </Feedback.Navigator>
  );
}
