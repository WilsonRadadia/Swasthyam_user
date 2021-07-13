import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ViewStaff from "../screens/MyStaff/viewStaff";
import colors from "../assets/colors/colors";
import DrawerBar from "../components/DrawerBar";
import NotificationIcon from "../components/NotificationIcon";
import StaffDetail from "../screens/MyStaff/staffDetail";
import EditStaff from "../screens/MyStaff/editStaff";
import AddStaff from "../screens/MyStaff/addStaff";
const MyStaff = createStackNavigator();

export default function MyStaffNav({ navigation }) {
  return (
    <MyStaff.Navigator>
      <MyStaff.Screen
        name="View Staff"
        component={ViewStaff}
        options={{
          headerTitleAlign: "center",
          headerTitle: "My Staff",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
          headerLeft: () => <DrawerBar navigation={navigation} />,
          headerRight: () => <NotificationIcon navigation={navigation} />,
        }}
      />
      <MyStaff.Screen
        name="Staff Detail"
        component={StaffDetail}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Staff Detail",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <MyStaff.Screen
        name="Edit Staff"
        component={EditStaff}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Edit Staff Detail",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
      <MyStaff.Screen
        name="Add Staff"
        component={AddStaff}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Add Staff",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </MyStaff.Navigator>
  );
}
