import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import BodyText from "./BodyText";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
      <View style={[styles.btn, props.style]}>
        <BodyText style={[styles.text, props.textStyle]}>
          {props.title}
        </BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontFamily: "open-sans-bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Button;
