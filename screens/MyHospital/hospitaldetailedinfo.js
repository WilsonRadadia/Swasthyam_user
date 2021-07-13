import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
  FlatList,
  Linking,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import NoData from "../../assets/SVG/NoData";
import Constants from "expo-constants";
import { Feather as Icon, FontAwesome as FAIcon } from "@expo/vector-icons";
import flatlistdata from "./photos";
import { useFonts } from "expo-font";
import {
  EvilIcons,
  Feather,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

const FlatListItem = (props) => {
  return (
    <View style={styles.display}>
      <Image
        source={{ uri: props.item.uri }}
        style={{
          height: 200,
          width: Dimensions.get("screen").width * 1,
          paddingTop: 10,
          marginBottom: 5,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
          borderWidth: 10,
          borderColor: "white",
          borderRadius: 15,
        }}
      ></Image>
    </View>
  );
};

const openDialScreen = () => {
  let number = "";
  if (Platform.OS === "ios") {
    number = "telprompt:${9723627517}";
  } else {
    number = "tel:${9723627517}";
  }
  Linking.openURL(number);
};

export default function Hospitalinfo({ route, navigation }) {
  const [loaded] = useFonts({});
  const { width: windowWidth } = useWindowDimensions();
  const [url, setUrl] = useState("https://goo.gl/maps/4qWgu6CGpDZ1274X8");
  const images = new Array(8).fill(
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  );
  const [isFavourite, setFavourite] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [size] = useState([
    { id: 1, label: "S" },
    { id: 1, label: "M" },
    { id: 1, label: "L" },
    { id: 1, label: "XL" },
  ]);
  const { Data: Data } = route.params;

  const covidappointment = () => {
    const DataTitles = Data.Title;
    navigation.navigate("Covid Appointment", { DataTitle: DataTitles });
  };

  const [selectedSize, setSelectedSize] = useState("M");

  const [productDescription] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.`
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
    {
      productName: "Dr.partik",
      productPrice: "Audiologist",
      productImage:
        "https://image.freepik.com/free-photo/friendly-indian-doctor-reviewing-medical-history-tablet_1262-12661.jpg",
    },
    {
      productName: "Dr.khushboo",
      productPrice: "Dentist",
      productImage:
        "https://img.freepik.com/free-photo/portrait-female-doctor-smiling-ward_107420-73715.jpg?size=338&ext=jpg",
    },
    {
      productName: "Dr.Ajay",
      productPrice: "Gynaecologist",
      productImage:
        "https://image.freepik.com/free-photo/confident-indian-physician_274689-12494.jpg",
    },
  ]);

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("#fff");
  }, []);

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            style={styles.scrollViewStyle}
            data={flatlistdata}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            horizontal={true}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={1}
            renderItem={({ item, index }) => {
              return <FlatListItem item={item} index={index}></FlatListItem>;
            }}
          />
        </View>
        <View>
          <Text style={styles.headertext}>{Data.Title}</Text>
        </View>

        <View style={styles.detailsView}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            <Entypo
              name="address"
              size={25}
              style={{ color: "black", marginLeft: -4 }}
            />
            <Text style={[styles.Normaltext]}>Address:</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              marginleft: 30,
            }}
          >
            <Text style={styles.detailsadd}>{Data.Address} </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
            }}
          >
            <EvilIcons
              name="location"
              style={{ marginLeft: -5 }}
              size={34}
              color="#3AAFA9"
            />
            <Text
              style={[
                styles.details1,
                {
                  textDecorationLine: "underline",
                  marginTop: 0,
                  color: colors.darkTeal,
                },
              ]}
              onPress={() => Linking.openURL(url)}
            >
              {Data.Link}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
            }}
          >
            <Feather name="phone" size={25} color="#3AAFA9" />
            <TouchableOpacity onPress={() => openDialScreen()}>
              <Text style={[styles.details1, { marginTop: 2 }]}>
                +91 {Data.Phone}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="email" size={25} color="#3AAFA9" />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto:dharmeshrathod3477@gmail.com")
              }
              title="support@example.com"
            >
              <Text style={[styles.details1, { marginTop: 2 }]}>
                {Data.Email}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingTop: 10,
            marginLeft: 20,
          }}
        >
          <MaterialIcons
            name="coronavirus"
            style={{ marginTop: -2 }}
            size={30}
            color="black"
          />
          <Text style={[styles.details, { marginBottom: 10 }]}>
            Covid Information:
          </Text>
        </View>
        <View style={[styles.info, { marginLeft: 20 }]}>
          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of beds:</Text>
            <Text style={styles.input}>20</Text>
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of vacant beds:</Text>
            <Text style={styles.input}>45</Text>
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of ventilators:</Text>
            <Text style={styles.input}>45</Text>
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of beds in ICU:</Text>
            <Text style={styles.input}>48</Text>
          </View>

          <View style={styles.t_input}>
            <Text style={styles.info1}>Number of available oxygen cyl.:</Text>
            <Text style={styles.input}>45</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Covid Appointment", {
                DataTitle: Data.Title,
              })
            }
            style={styles.moreProductBuyButton1}
          >
            <Text style={styles.moreProductBuyButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.details}>Doctors</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
              {moreProducts.map((item, index) => (
                <View key={index} style={{ width: 180, marginHorizontal: 10 }}>
                  <View style={styles.moreProductImageView}>
                    <Image
                      style={{ flex: 1 }}
                      source={{
                        uri: item.productImage,
                      }}
                    />
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <Text style={styles.moreProductName}>
                      {item.productName}
                    </Text>
                    <View style={styles.moreProductPriceView}>
                      <Text style={styles.moreProductPrice}>
                        {item.productPrice}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Book</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    borderBottomColor: "#dfe4fe",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headertext: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 35,
    fontStyle: "italic",
    marginBottom: 12,
    textDecorationLine: "underline",
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  info1: {
    flexDirection: "row",
    marginLeft: 40,
    marginVertical: 5,
    fontSize: 16,
    color: colors.darkTeal,
  },

  input: {
    color: "black",
    flexDirection: "row",
    width: 50,
    height: 30,
    marginRight: 20,
    borderWidth: 1.5,
    fontSize: 16,
    borderColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },

  t_input: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    marginLeft: 10,
    fontSize: 18,
    marginRight: 10,
    color: "black",
  },

  details1: {
    flex: 1,
    justifyContent: "center",
    textAlign: "justify",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 14,
    color: colors.darkTeal,
  },
  detailsadd: {
    flex: 1,
    justifyContent: "center",
    textAlign: "justify",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 53,
    marginRight: 20,
    fontSize: 14,
    color: colors.darkTeal,
  },

  Normaltext: {
    marginLeft: 10,
    color: "black",
    fontSize: 18,
  },

  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
  },
  moreProductName: {
    fontSize: 16,
  },
  moreProductPriceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
  },

  moreProductBuyButton: {
    backgroundColor: colors.teal,
    height: 40,
    marginTop: 10,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderRadius: 10,
  },
  moreProductBuyButton1: {
    backgroundColor: colors.teal,
    alignSelf: "center",
    // paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 17,
    borderWidth: 0,
    width: 300,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderRadius: 10,
    height: 40,
    marginTop: 40,
    marginBottom: 25,
  },
  moreProductBuyButtonText: {
    color: "#fff",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
