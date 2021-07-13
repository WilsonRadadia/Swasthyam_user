import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Divider,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import profileImage from "../assets/image/profile.jpg";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Feather,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";

// import { AuthContext } from "../components/context";

export default function DrawerContent(props) {
  //   const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableRipple
            style={styles.userInfoSection}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <View
              style={{
                flexDirection: "column",
                marginTop: 15,
                marginLeft: 0,
              }}
            >
              <Avatar.Image source={profileImage} size={70} />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Nihal Shaikh</Title>
                <Caption style={styles.caption}>
                  nihalshaikh196.11@gmail.com
                </Caption>
              </View>
            </View>
          </TouchableRipple>
          {/* <Divider style={{ marginBottom: 3, marginTop: 3 }} />
          <Divider /> */}
          <Drawer.Section
            style={[styles.drawerSection, { borderColor: colors.teal }]}
          >
            <DrawerItem
              icon={({ focused, color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={focused ? 30 : size}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Feather name="list" size={size} color={color} />
              )}
              label="My Appointments"
              onPress={() => {
                props.navigation.navigate("My Appointments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="history" color={color} size={size} />
              )}
              label="History"
              onPress={() => {
                props.navigation.navigate("History");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="feedback" color={color} size={size} />
              )}
              label="Feedback & Suggestions"
              onPress={() => {
                props.navigation.navigate("Feedback & Suggestions");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons
                  name="help-circle-outline"
                  size={size}
                  color={color}
                />
              )}
              label="Help & Support"
              onPress={() => {
                props.navigation.navigate("Help & Support");
              }}
            />
          </Drawer.Section>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            // signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 20,

    borderRadius: 10,
    elevation: 6,
    backgroundColor: colors.aqua,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    backgroundColor: colors.aqua,
    borderRadius: 10,
    elevation: 6,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
