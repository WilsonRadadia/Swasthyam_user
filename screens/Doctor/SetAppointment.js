import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Chip } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import { useState } from "react";
import colors from "../../assets/colors/colors";

const slotSelect = ({ route, navigation }) => {
  const [selected, setSelected] = useState([]);
  const falsearray = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [Timeslot, setTimeslot] = useState("");

  let prev;

  const select = (id) => {
    setTimeslot(dataSource[id]);
    prev = [...falsearray];
    prev[id] = !prev[id];
    setSelected(prev);
  };
  console.log(Timeslot);
  const dataSource = [
    "09-10",
    "10-11",
    "11-12",
    "12-13",
    "13-14",
    "14-15",
    "15-16",
    "16-17",
    "17-18",
    "18-19",
    "19-20",
    "20-21",
  ];

  const currentdate = new Date();
  const dates = new Date(currentdate.setYear(currentdate.getFullYear()));
  const [date, setDate] = useState(dates);

  const {
    DataName: DataName,
    DataCate: DataCate,
    DataTime: DataTime,
    DataFee: DataFee,
    Datauri: Datauri,
    DataHospital: DataHospital,
  } = route.params;

  //console.log(dataSource[prev]);
  console.log(date);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.docprofile}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              flexDirection: "row",
              height: 60,
              width: 60,
              marginTop: 30,
              borderRadius: 100 / 2,
              marginLeft: 10,
            }}
          >
            <Image source={{ uri: Datauri }}></Image>
            <View style={styles.info}>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  marginRight: -80,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {DataName}
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: colors.teal,
                }}
              >
                {DataCate}
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  marginRight: -80,
                }}
              >
                {DataTime}
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                }}
              >
                {DataFee}/-
              </Text>

              <View style={styles.row}>
                <AntDesign
                  name="star"
                  style={{ marginLeft: 20, color: colors.teal }}
                  size={16}
                />
                <AntDesign
                  name="star"
                  style={{ marginLeft: 5, color: colors.teal }}
                  size={16}
                />
                <AntDesign
                  name="star"
                  style={{ marginLeft: 5, color: colors.teal }}
                  size={16}
                />
                <AntDesign
                  name="star"
                  style={{ marginLeft: 5, color: colors.teal }}
                  size={16}
                />
                <AntDesign
                  name="star"
                  style={{ marginLeft: 5, color: colors.teal }}
                  size={16}
                />
              </View>
            </View>
          </View>
        </View>
        <SafeAreaView>
          <View style={{ backgroundColor: "white" }}>
            <Text style={styles.dates}>Select Date:</Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate={dates}
              maxDate="01-01-2100"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 245,
                },
                dateInput: {
                  borderColor: "white",
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>
        </SafeAreaView>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Select Time:
        </Text>
        <View style={styles.slots}>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {dataSource.map((item, index) => {
              return (
                <View
                  style={{
                    margin: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    key={index}
                    selected={selected[index]}
                    mode="outlined" //changing display mode, default is flat.
                    height={30} //give desirable height to chip
                    textStyle={{ color: "white", fontSize: 15 }} //label properties
                    style={{ backgroundColor: colors.teal }} //display diff color BG
                    onPress={() => select(index)}
                  >
                    {item}
                  </Chip>
                </View>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            navigation.navigate("AppointmentForm", {
              date: JSON.stringify(date),
              DataFee: DataFee,
              selected: selected,
              Timeslot: Timeslot,
              DataName: DataName,
              DataCate: DataCate,
              DataHospital: DataHospital,
            })
          }
        >
          <Text style={styles.buttonTextStyle}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  chip: {
    textAlign: "center",
    paddingLeft: 5,
    marginLeft: 2,
    marginTop: 5,
  },
  box: {
    borderWidth: 0,
    borderRadius: 30,
    borderColor: colors.teal,
    alignSelf: "center",
    marginTop: 60,
    height: 630,
    width: 330,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 9,
    backgroundColor: "white",
  },
  slots: {
    marginTop: 10,
    marginLeft: 20,
  },
  container: {
    backgroundColor: colors.teal,
  },
  buttonStyle: {
    backgroundColor: colors.teal,
    borderWidth: 0,
    color: colors.white,
    borderColor: "white",
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 10 },
    borderWidth: 0,
    borderRadius: 0,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 170,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    fontSize: 16,
  },
  datePickerStyle: {
    width: 290,
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowOpacity: 0.8,
    shadowColor: colors.aqua,
    elevation: 9,
  },
  dates: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30,
  },
  docprofile: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderColor: "white",
    shadowColor: "white",
    backgroundColor: "white",
    shadowOpacity: 0.8,
    elevation: 9,
    height: 120,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
  },
  info: {
    marginLeft: 50,
    marginRight: -90,
    marginTop: -30,
  },
});

export default slotSelect;
