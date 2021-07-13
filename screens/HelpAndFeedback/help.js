import React from "react";
import { StyleSheet, Dimensions, Text, View, ScrollView } from "react-native";
import colors from "../../assets/colors/colors";
import { List } from "react-native-paper";

const help = () => {
  const contents = [
    {
      title: "1) Issue regarding the upload of photo?",
      body: "Let the random choice generator make a quick decision for you by picking a choice from a selection list of items you provide. Its a quick and easy decision maker.",
    },
    {
      title: "2) Issue regarding the appointment?",
      body: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The",
    },
    {
      title: "3) Issue regarding the COVID Care?",
      body: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens",
    },
    {
      title: "4) Issue regarding the payment?",
      body: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens",
    },
    {
      title: "5) Issue regarding the advertisement?",
      body: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The",
    },
  ];

  return (
    <List.Section title="FAQ">
      <ScrollView showsVerticalScrollIndicator={false}>
        {contents.map((item, itemId) => {
          return (
            <List.Accordion
              key={itemId}
              title={item.title}
              titleStyle={{ color: colors.teal }}
            >
              <List.Item
                title="Answer"
                description={item.body}
                descriptionNumberOfLines={10}
              ></List.Item>
            </List.Accordion>
          );
        })}
      </ScrollView>
    </List.Section>
  );
};

export default help;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: 60,
  },
  heading: {
    fontSize: 30,
    marginTop: 40,
    marginLeft: 20,
    fontWeight: "bold",
    color: colors.darkTeal,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.4,
    height: Dimensions.get("window").height * 0.4,
    backgroundColor: colors.aqua,
    borderRadius: 1000,
    position: "absolute",
    bottom: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.3,
  },
  header: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontSize: 12,
    color: colors.darkTeal,
  },
});
