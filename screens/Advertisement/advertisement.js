import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import colors from "../../assets/colors/colors";
import CalendarPicker from "react-native-calendar-picker";
import { AssetsSelector } from "expo-images-picker";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import StatusBarPlaceHolder from "../../components/StatusBarPlaceHolder";
import NoData from "../../assets/SVG/NoData";
import { Divider } from "react-native-paper";

const ForceInset = {
  top: "never",
  bottom: "never",
};

const advertisement = ({ route, navigation }) => {
  const [ShowPicker, setShowPicker] = useState(false);
  const [ImageData, setImageData] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const maxSelections = useRef(8);
  const { width: windowWidth } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  function onDone(data) {
    try {
      let data1 = [...ImageData];

      data.map((d) => {
        if (ImageData.find((obj) => obj.id == d.id)) {
          alert("You can't upload same photos again!");
          return;
        } else {
          data1.push(d);
          maxSelections.current = maxSelections.current - 1;
        }
      });

      if (maxSelections.current < 0) {
        alert("Maximum limit for selecting photos is 8 !");
        maxSelections.current = 8 - ImageData.length;
      } else {
        let temp = [];
        setImageData(data1);
        data1.map((item) => {
          temp.push(item.uri);
        });
        setImageURLs(temp);
      }

      setShowPicker(false);
    } catch (err) {
      console.log(err);
    }
  }
  const goBack = () => {
    setShowPicker(false);
  };

  const openImageSelector = () => {
    if (maxSelections.current === 0) {
      alert("Maximum limit for selecting photos is 8 !");
      return;
    } else {
      setShowPicker(true);
    }
  };
  const deleteItemByURL = (url) => {
    const prevData = [...ImageData];
    const prevURL = [...imageURLs];
    const filteredURLs = prevURL.filter((item) => item !== url);
    const filteredData = prevData.filter((item) => item.uri !== url);
    setImageData(filteredData);
    setImageURLs(filteredURLs);
    // console.log("FilteredData: ", filteredData);
    // console.log("ImageData: ", ImageData);

    maxSelections.current = maxSelections.current + 1;
    // console.log("MaxSelection: ", maxSelections.current);
  };

  const numberofdays = () => {
    if (selectedStartDate === null || selectedEndDate === null) {
      alert("Please Select start and end date of advertisement!");
    } else if (ImageData.length === 0) {
      alert("Please select photos for advertisement!");
    } else {
      var StartDate = selectedStartDate.substr(0, 2);
      var EndDate = selectedEndDate.substr(0, 2);

      var StartMonth = selectedStartDate.substr(3, 2);
      var EndMonth = selectedEndDate.substr(3, 2);

      var StartYear = selectedStartDate.substr(6, 4);
      var EndYear = selectedEndDate.substr(6, 4);

      var day = EndDate - StartDate;
      var month = (EndMonth - StartMonth) * 30;
      var year = (EndYear - StartYear) * 365;

      var totaldays = day + month + year;
      var price = totaldays * 1000;

      navigation.navigate("Payment Details", {
        Days: totaldays,
        Price: price,
        startdate: selectedStartDate,
        enddate: selectedEndDate,
      });
    }
  };

  const onDateChange = (date, type) => {
    if (date !== null) {
      let date1 = date.format("DD-MM-YYYY");

      if (type === "START_DATE") {
        setSelectedStartDate(date1);
      }
      if (type === "END_DATE") {
        setSelectedEndDate(date1);
      }
    }
  };

  const _textStyle = {
    color: "white",
  };

  const _buttonStyle = {
    backgroundColor: colors.teal,
    borderRadius: 5,
  };

  return (
    <View></View>
    // <>
    //   {ShowPicker ? (
    //     <SafeAreaView forceInset={ForceInset} style={styles.container1}>
    //       <StatusBarPlaceHolder />
    //       <View style={styles.container1}>
    //         <AssetsSelector
    //           options={{
    //             assetsType: ["photo"],
    //             maxSelections: maxSelections.current,
    //             margin: 4,
    //             portraitCols: 3,
    //             landscapeCols: 5,
    //             widgetWidth: 100,
    //             widgetBgColor: colors.aqua,
    //             videoIcon: {
    //               Component: Ionicons,
    //               iconName: "ios-videocam",
    //               color: "tomato",
    //               size: 20,
    //             },
    //             selectedIcon: {
    //               Component: Ionicons,
    //               iconName: "ios-checkmark-circle",
    //               color: "white",
    //               bg: "#0eb14970",
    //               size: 26,
    //             },
    //             spinnerColor: "black",
    //             onError: () => {},
    //             noAssets: () => <View></View>,
    //             defaultTopNavigator: {
    //               continueText: "Done",
    //               goBackText: "Back",
    //               selectedText: "Selected",
    //               midTextColor: "tomato",
    //               buttonStyle: _buttonStyle,
    //               buttonTextStyle: _textStyle,
    //               backFunction: goBack,
    //               doneFunction: (data) => onDone(data),
    //             },
    //           }}
    //         />
    //       </View>
    //     </SafeAreaView>
    //   ) : (
    //     <SafeAreaView style={styles.container}>
    //       <ScrollView showsVerticalScrollIndicator={false}>
    //         <View
    //           style={[
    //             {
    //               minHeight: 110,
    //             },
    //           ]}
    //         >
    //           <Text style={styles.details}>Advertisement Photos: </Text>

    //           <TouchableOpacity
    //             style={{
    //               flexDirection: "row",
    //               marginLeft: 20,
    //               marginTop: 10,
    //               borderWidth: 1,
    //               width: 180,
    //               borderRadius: 10,
    //             }}
    //             onPress={() => openImageSelector()}
    //           >
    //             <MaterialCommunityIcons
    //               style={{ alignSelf: "flex-end", marginRight: 20 }}
    //               name="camera-plus-outline"
    //               size={35}
    //               color="black"
    //             />
    //             <Text style={{ fontSize: 18, alignSelf: "center" }}>
    //               Upload Photos
    //             </Text>
    //           </TouchableOpacity>

    //           <View style={styles.scrollContainer}>
    //             {imageURLs.length === 0 ? (
    //               <NoData height="200" width="80%" />
    //             ) : (
    //               <ScrollView
    //                 horizontal={true}
    //                 pagingEnabled
    //                 showsHorizontalScrollIndicator={false}
    //                 onScroll={Animated.event(
    //                   [
    //                     {
    //                       nativeEvent: {
    //                         contentOffset: {
    //                           x: scrollX,
    //                         },
    //                       },
    //                     },
    //                   ],
    //                   { useNativeDriver: false }
    //                 )}
    //                 scrollEventThrottle={1}
    //               >
    //                 {imageURLs.map((image, imageIndex) => {
    //                   return (
    //                     <View
    //                       style={{ width: windowWidth, height: 250 }}
    //                       key={imageIndex}
    //                     >
    //                       <ImageBackground
    //                         source={{ uri: image }}
    //                         style={styles.card}
    //                       >
    //                         <View style={styles.textContainer}>
    //                           <Text
    //                             style={styles.infoText}
    //                             onPress={() => deleteItemByURL(image)}
    //                           >
    //                             <AntDesign name="delete" size={24} />
    //                           </Text>
    //                         </View>
    //                       </ImageBackground>
    //                     </View>
    //                   );
    //                 })}
    //               </ScrollView>
    //             )}
    //             <View style={styles.indicatorContainer}>
    //               {imageURLs.map((image, imageIndex) => {
    //                 const width = scrollX.interpolate({
    //                   inputRange: [
    //                     windowWidth * (imageIndex - 1),
    //                     windowWidth * imageIndex,
    //                     windowWidth * (imageIndex + 1),
    //                   ],
    //                   outputRange: [8, 16, 8],
    //                   extrapolate: "clamp",
    //                 });
    //                 return (
    //                   <Animated.View
    //                     key={imageIndex}
    //                     style={[styles.normalDot, { width }]}
    //                   />
    //                 );
    //               })}
    //             </View>
    //           </View>
    //         </View>
    //         <Divider style={{ height: 1, width: 300, alignSelf: "center" }} />
    //         {/* Calendar */}
    //         <View
    //           style={[
    //             {
    //               minHeight: 110,
    //             },
    //           ]}
    //         >
    //           <Text style={styles.details}>Date of advertisement: </Text>
    //           <View style={[styles.container, { marginTop: 10 }]}>
    //             <CalendarPicker
    //               startFromMonday={true}
    //               allowRangeSelection={true}
    //               minDate={new Date()}
    //               maxDate={new Date(2100, 1, 1)}
    //               weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
    //               months={[
    //                 "January",
    //                 "Febraury",
    //                 "March",
    //                 "April",
    //                 "May",
    //                 "June",
    //                 "July",
    //                 "August",
    //                 "September",
    //                 "October",
    //                 "November",
    //                 "December",
    //               ]}
    //               previousTitle="Previous"
    //               nextTitle="Next"
    //               todayBackgroundColor="#e6ffe6"
    //               selectedDayColor="#66ff33"
    //               selectedDayTextColor="#000000"
    //               scaleFactor={380}
    //               textStyle={{
    //                 color: "#000000",
    //               }}
    //               onDateChange={onDateChange}
    //             />

    //             <View
    //               //Underline
    //               style={{
    //                 borderBottomColor: "#350475",
    //                 borderBottomWidth: 1,
    //                 marginLeft: 20,
    //                 marginBottom: 30,
    //                 marginTop: 30,
    //                 width: "90%",
    //               }}
    //             />
    //           </View>
    //         </View>
    //         <View>
    //           <TouchableOpacity
    //             onPress={() => numberofdays()}
    //             style={[
    //               styles.buttonStyle,
    //               { width: 100, alignSelf: "center" },
    //             ]}
    //           >
    //             <Text style={styles.buttonTextStyle}>Next</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </ScrollView>
    //     </SafeAreaView>
    //   )}
    // </>
  );
};
export default advertisement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#ffffff",
    // padding: 16,
  },
  container1: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
  },

  input1: {
    borderColor: "black",
    width: 290,
    marginLeft: 20,
    borderWidth: 1,
    marginTop: 20,
    fontSize: 18,
  },

  input2: {
    borderColor: "black",
    width: 290,
    marginLeft: 20,
    borderWidth: 1,
    marginTop: 20,
    fontSize: 18,
  },

  buttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    color: colors.white,
    borderColor: colors.teal,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
  },

  addimage: {
    // borderWidth: 1,
    // borderColor: "black",
    // borderRadius: 100,
    height: 40,
    width: 40,
    marginLeft: 270,
  },

  addimagetext: {
    //fontStyle:"bold",
    color: colors.darkBlue,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  imagebackground: {
    marginTop: 70,
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  valuepassed: {
    fontSize: 20,
    fontWeight: "bold",
  },

  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 270,
    height: 200,
    borderRadius: 30,
    marginTop: 23,
  },
  itemText: {
    color: "black",
    marginTop: 5,
  },

  instructions: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  flatlistimage: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
  },

  spacing: {
    marginTop: 60,
  },
  details: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 20,
    marginRight: 20,
    fontWeight: "bold",
    color: colors.teal,
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
