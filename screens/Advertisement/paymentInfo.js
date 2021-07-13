import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  CheckBox,
  Animated,
} from "react-native";
import colors from "../../assets/colors/colors";

const PaymentInfo = ({ route }) => {
  const { Days, Price, startdate, enddate } = route.params;
  const [selectcheckbox, setselectcheckbox] = useState(false);
  const UpAnim = useRef(new Animated.ValueXY({ x: 0, y: 500 })).current;
  const SideAnim = useRef(new Animated.ValueXY({ x: -200, y: 0 })).current;

  useEffect(() => {
    moveUp();
    moveSide();
  }, []);

  const moveUp = () => {
    Animated.spring(UpAnim, {
      toValue: { x: 0, y: 0 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const moveSide = () => {
    Animated.spring(SideAnim, {
      toValue: { x: 0, y: 0 },
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            backgroundColor: colors.aqua,
            borderBottomStartRadius: 0,
            borderBottomEndRadius: 120,
            minHeight: 100,
          },
          SideAnim.getLayout(),
        ]}
      >
        <Text
          style={{
            fontSize: 30,
            marginTop: 35,
            marginLeft: 20,
            fontWeight: "bold",
            color: colors.darkTeal,
          }}
        >
          Appointment Detail
        </Text>
      </Animated.View>
      <Animated.View style={[styles.box, UpAnim.getLayout()]}>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.priceanddate}>
              <View style={styles.datetext}>
                <Text style={styles.txtsdate}>Selected Start Date:</Text>
                <Text style={styles.s_day}>{startdate}</Text>
              </View>

              <View style={styles.datetext}>
                <Text style={styles.txtedate}>Selected End Date:</Text>
                <Text style={styles.e_day}>{enddate}</Text>
              </View>
            </View>

            <View
              //Underline
              style={{
                borderBottomColor: colors.teal,
                borderBottomWidth: 1,
                marginTop: 20,
                width: "100%",
              }}
            />

            <View style={styles.priceanddate}>
              <View style={styles.totaltext}>
                <Text style={styles.txttotaldays}>Total Days:</Text>
                <Text style={styles.days}>{Days}</Text>
              </View>

              <View style={styles.totaltext}>
                <Text style={styles.info}>Price Per Day is: </Text>
                <Text style={styles.ppday}>1000</Text>
              </View>

              <View
                //Underline
                style={{
                  borderBottomColor: colors.teal,
                  borderBottomWidth: 1,
                  marginBottom: 10,
                  marginTop: 40,
                  width: "100%",
                }}
              />

              <View style={styles.totaltext}>
                <Text style={styles.txttotalprice}>Total Price:</Text>
                <Text style={styles.price}>{Price}/-</Text>
              </View>
            </View>

            <View style={styles.confirmation}>
              <CheckBox
                value={selectcheckbox}
                onValueChange={setselectcheckbox}
                style={{ marginLeft: -5 }}
              />
              <Text style={{ marginTop: 3, marginRight: 20 }}>
                I agree that I have read and understood the above information
                and I agree the DocPoint Terms of Service and Privacy Policy.
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  { width: 100, alignSelf: "center" },
                ]}
              >
                <Text style={styles.buttonTextStyle}>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
};
export default PaymentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginTop: -20,
    backgroundColor: "#ffffff",
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
    marginTop: 40,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
  },
  totaltext: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txttotaldays: {
    fontSize: 16,
    color: "black",
  },
  days: {
    fontSize: 16,
    color: colors.darkTeal,
  },
  price: {
    fontSize: 18,
    color: colors.darkTeal,
    fontWeight: "bold",
  },
  txttotalprice: {
    fontSize: 19,
    color: "black",
    fontWeight: "bold",
  },
  priceanddate: {
    marginTop: 30,
  },
  info: {
    color: "black",
    fontSize: 16,
  },
  button: {
    padding: 10,
    marginTop: 30,
    width: 120,
    marginBottom: 110,
    alignItems: "center",
    backgroundColor: colors.teal,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  ppday: {
    color: colors.darkTeal,
    fontSize: 16,
  },
  datetext: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datetext: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtsdate: {
    fontSize: 16,
    color: "black",
  },
  txtedate: {
    fontSize: 16,
    color: "black",
  },
  s_day: {
    fontSize: 16,
    color: colors.darkTeal,
  },
  e_day: {
    fontSize: 16,
    color: colors.darkTeal,
  },
  confirmation: {
    flexDirection: "row",
    marginTop: 40,
  },
  box: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: colors.teal,
    padding: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 530,
    shadowColor: colors.aqua,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "#fff",
  },
});
