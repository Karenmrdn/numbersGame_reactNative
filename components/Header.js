import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";
import BodyText from "./BodyText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
      <BodyText style={styles.text}>{props.subtitle}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
  },
  text: {
    color: "#fff",
  },
});

export default Header;
