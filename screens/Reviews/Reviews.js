import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import reviewdata from "./appointment_data";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/colors/colors";

const FlatListItem = (props) => {
  const detailedview = () => {
    props.navigation.navigate("Review Detail", { Data: props.item });
  };

  return (
    <View style={styles.lists}>
      {/* <TouchableOpacity onPress={() => detailedview()}>
        <View style={styles.nameandstar}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginLeft: 5,
              color: colors.tealBlack,
            }}
          >
            {props.item.Name}
          </Text>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: colors.tealBlack,
            }}
          >
            {props.item.Review_star} Star
          </Text>
        </View>

        <View>
          <View style={styles.tocken}>
            <Text
              style={{
                color: colors.darkTeal,
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              Tocken No:
            </Text>
          </View>
          <Text
            style={{
              color: colors.tealBlack,
              fontSize: 16,
              marginLeft: 20,
              marginLeft: 40,
            }}
          >
            {props.item.Tocken_No}
          </Text>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: colors.darkTeal,
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              Reviews:
            </Text>
            <Text
              style={{
                color: colors.tealBlack,
                fontSize: 16,
                marginLeft: 20,
                marginLeft: 40,
              }}
            >
              {props.item.Review_text.substring(0, 50)} ...
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function Reviews({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          backgroundColor: colors.aqua,
          borderBottomStartRadius: 0,
          borderBottomEndRadius: 120,
          minHeight: 100,
        }}
      >
        <Text style={styles.heading}>Reviews</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.itemlist}
        data={reviewdata}
        renderItem={({ item, index }) => {
          return (
            <FlatListItem
              navigation={navigation}
              item={item}
              index={index}
            ></FlatListItem>
          );
        }}
      />
      <View style={{ marginBottom: 10 }}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },
  nameandstar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemlist: {
    marginTop: 10,
  },

  lists: {
    borderColor: colors.teal,
    borderWidth: 0,
    borderRadius: 10,
    height: 200,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: colors.white,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    marginBottom: 5,
    //flex: 1,
  },
  tocken: {
    flexDirection: "row",
    marginTop: 10,
  },
});
