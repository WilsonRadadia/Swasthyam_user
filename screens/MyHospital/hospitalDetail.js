import hospitalData from "./hospitaldata";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import colors from "../../assets/colors/colors";
import {
  View,
  Switch,
  StyleSheet,
  Text,
  Modal,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  TextInput,
  Image,
  Linking,
  FlatList,
  ImageBackground,
} from "react-native";

const App = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const doctordetails = (item) => {
    navigation.navigate("Hospital Info", {
      Data: item,
      Url: item.uri,
    });
  };

  useEffect(() => {
    setFilteredDataSource(hospitalData);
    setMasterDataSource(hospitalData);
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Title
          ? item.Title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={styles.listitem}>
        <View style={styles.display}>
          <TouchableOpacity onPress={() => doctordetails(item)}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: item.uri }}
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 19,
                  marginLeft: 10,
                  borderRadius: 60 / 2,
                }}
              ></Image>

              <View style={styles.info}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {item.Title}
                </Text>
                <Text style={{ fontSize: 14, color: colors.teal }}>
                  {item.HospitalCategory}
                </Text>
                <Text style={{ fontSize: 14 }}>{item.Location}</Text>
                <Text style={{ fontSize: 14 }}>{item.Hospital}</Text>
                <View style={{ flexDirection: "row", marginTop: -19 }}>
                  <Text style={{ fontSize: 14 }}>Ratings:</Text>
                  <Text style={{ fontSize: 14, marginLeft: 5 }}>
                    {item.Ratings} Star
                  </Text>
                  <Text style={{ fontSize: 14, marginLeft: 5 }}>
                    {item.Ratingscount}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <>
          <View style={styles.box}>
            <View></View>
            <SafeAreaView>
              <View style={{ backgroundColor: "white", borderRadius: 25 }}>
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={(text) => searchFilterFunction(text)}
                  value={search}
                  underlineColorAndroid="transparent"
                  placeholder="Search Here"
                />
                <View style={{ marginTop: 20 }}></View>

                <FlatList
                  style={styles.flatlist}
                  data={filteredDataSource}
                  navigation={navigation}
                  keyExtractor={(item, index) => item.id}
                  renderItem={ItemView}
                />
              </View>
            </SafeAreaView>
          </View>
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.teal,
  },
  appbar: {
    backgroundColor: colors.teal,
  },
  titles: {
    marginBottom: 20,
  },
  itemlist: {
    marginTop: -20,
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

  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "white",
    backgroundColor: "#FFFFFF",
    marginTop: -16.8,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
  },
  box: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 50,
    height: 1300,
    width: 330,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
    marginBottom: 20,
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
});

export default App;
