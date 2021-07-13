import React, { useState, useEffect } from "react";
import flatlistdata from "../Doctor/DoctorData";
import colors from "../../assets/colors/colors";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

const App = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(flatlistdata);
    setMasterDataSource(flatlistdata);
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Name ? item.Name.toUpperCase() : "".toUpperCase();
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
                  {item.Name}
                </Text>
                <Text style={{ fontSize: 14, color: colors.teal }}>
                  {item.Category}
                </Text>
                <Text style={{ fontSize: 14 }}>{item.Time}</Text>
                <Text style={{ fontSize: 14 }}>{item.Hospital}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const doctordetails = (item) => {
    navigation.navigate("DoctorDetails", {
      Data: item,
      Url: item.uri,
    });
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
                  keyExtractor={(item, index) => index.toString()}
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
    marginTop: 20,
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
  listitem: {
    // marginLeft: 20,
    // marginRight: 20,
    // borderWidth: 1,
    // borderRadius: 15,
    // borderColor: "white",
    // shadowColor: colors.aqua,
    // shadowOpacity: 0.8,
    // elevation: 9,
    // backgroundColor: "white",
    // marginBottom: 20,
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
