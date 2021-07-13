import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import notificationData from "./data";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import Navigation from "../../navigation";

const FlatListItem = (props) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity style={{ height: 90 }}>
            <View style={styles.topTextView}>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "bold", fontSize: 17, color: colors.teal },
                ]}
              >
                {props.item.Title}
              </Text>
              <Text
                style={[styles.text, { fontWeight: "bold", color: "gray" }]}
              >
                {props.item.Time}
              </Text>
            </View>
            <View style={styles.topMiddleView}>
              <View style={styles.textView}>
                <Text style={[styles.text, { marginLeft: 3 }]}>
                  {props.item.Date}
                </Text>
              </View>

              <View style={styles.textView}>
                <Text style={[styles.text, { marginLeft: 3 }]}>
                  {truncate(props.item.Details, 50)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function Notifications({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar
        translucent={true}
        style="dark"
        backgroundColor={colors.darkTeal}
      />
      <Appbar style={styles.appbar}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title="Notifications"
          style={{ marginLeft: 60 }}
          color="white"
        />
      </Appbar>

      <FlatList
        style={styles.itemlist}
        data={notificationData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <FlatListItem item={item} index={index}></FlatListItem>;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: colors.teal,
  },
  titles: {
    marginBottom: 20,
  },
  itemlist: {
    marginTop: 10,
    marginBottom: 60,
  },
  cardContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0)",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.darkTeal,
    shadowOpacity: 0.8,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 130,
    justifyContent: "space-between",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
  },

  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "100",
  },

  textView: {
    width: "100%",
    marginTop: 5,
    flexDirection: "row",
  },
  topTextView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topMiddleView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
