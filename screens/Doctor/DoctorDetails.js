import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Overlay,
  useState,
} from "react-native";
import colors from "../../assets/colors/colors";
//import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Entypo,
  FontAwesome5,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

export default function Doctors({ route, navigation }) {
  const { Data: Data, Url: Url } = route.params;
  console.log(Url);
  return (
    <View style={styles.container}>
      <StatusBar animated style="dark" backgroundColor={colors.darkTeal} />
      {/* <Image
        source={{
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      /> */}

      <View style={styles.box}></View>
      {/* <Image source={{ uri: Url }}></Image> */}

      <View style={styles.nestedbox}>
        <View>
          <SafeAreaView>
            <TouchableOpacity
              //hitSlop={{ top: 100, bottom: 50, left: 50, right: 50 }}
              onPress={() =>
                navigation.navigate("SetAppointment", {
                  DataName: Data.Name,
                  DataCate: Data.Category,
                  DataCons: Data.consultation,
                  DataFee: Data.Fee,
                  Datarate: Data.Ratingscount,
                  DataTime: Data.Time,
                  Datauri: Data.uri,
                  DataHospital: Data.Hospital,
                })
              }
            >
              <Ionicons name="calendar" style={styles.appointment} size={25} />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View style={styles.nestedboxtext}>
          <Text style={styles.docname}>{Data.Name}</Text>

          <View style={styles.row}>
            <AntDesign
              name="star"
              style={{ marginLeft: 20, marginTop: 10, color: colors.teal }}
              size={16}
            />
            <AntDesign
              name="star"
              style={{ marginLeft: 5, marginTop: 10, color: colors.teal }}
              size={16}
            />
            <AntDesign
              name="star"
              style={{ marginLeft: 5, marginTop: 10, color: colors.teal }}
              size={16}
            />
            <AntDesign
              name="star"
              style={{ marginLeft: 5, marginTop: 10, color: colors.teal }}
              size={16}
            />
            <AntDesign
              name="star"
              style={{ marginLeft: 5, marginTop: 10, color: colors.teal }}
              size={16}
            />
          </View>
          <View style={styles.row}>
            <Text
              style={{
                color: "black",
                fontSize: 14,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              Qualification:
            </Text>

            <Text style={styles.doccat}>{Data.Category}</Text>
          </View>

          <View style={styles.row}>
            <Text
              style={{
                color: "black",
                fontSize: 14,
                marginTop: 10,
                marginLeft: 20,
              }}
            >
              Total Consultations Completed:
            </Text>
            <Text style={styles.consultation}>{Data.TotalConsultation}</Text>
          </View>

          <View style={styles.row}>
            <Entypo
              name="back-in-time"
              style={{
                marginLeft: 20,
                marginTop: 10,
                color: colors.darkTeal,
              }}
              size={20}
            />
            <Text style={{ marginTop: 11, marginLeft: 10 }}>{Data.Time}</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <FontAwesome5
              name="hospital-alt"
              style={{ marginTop: 10, color: colors.darkTeal }}
              size={20}
            />
            <Text style={{ marginTop: 12, marginLeft: 10 }}>
              {Data.Hospital}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.ratecount}>{Data.Ratingscount}</Text>
            <Text style={{ marginTop: 19, marginLeft: 5 }}>{Data.Ratings}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.teal,
    justifyContent: "flex-start",
  },

  box: {
    borderWidth: 0,
    borderRadius: 25,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 60,
    height: 300,
    width: 330,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
  },
  nestedboxtext: {
    marginTop: 0,
  },

  display: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    height: 100,
    width: 295,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
    shadowRadius: 3.84,
  },
  info: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  listitems: {
    marginTop: 10,
  },
  docname: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  nestedbox: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#D3D3D3",
    alignSelf: "center",
    height: 330,
    width: 330,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
    marginTop: -50,
  },
  doccat: {
    color: colors.teal,
    fontSize: 14,
    marginTop: 10.2,
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
  },
  consultation: {
    color: colors.teal,
    fontSize: 14,
    marginTop: 10.2,
    marginLeft: 5,
  },
  ratecount: {
    marginTop: 14,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: colors.teal,
    borderRadius: 10,
    padding: 5,
  },
  appointment: {
    color: colors.darkTeal,
    marginTop: -15,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 11,
    marginLeft: 240,
    shadowColor: colors.aqua,
    backgroundColor: "white",
    elevation: 9,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});
