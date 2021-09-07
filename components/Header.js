import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";
import BodyText from "./BodyText";

const Header = (props) => {
  return (
    <View
      style={[
        styles.headerBase,
        Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      ]}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
      <BodyText style={styles.text}>{props.subtitle}</BodyText>
    </View>
  );
};

const isIos = Platform.OS === "ios";

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 100,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIos: {
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderColor: colors.primary,
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  headerTitle: {
    color: isIos ? colors.primary : "#fff",
    fontSize: 24,
  },
  text: {
    color: isIos ? colors.primary : "#fff",
  },
});

export default Header;
