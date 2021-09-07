import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import colors from "../constants/colors";
import BodyText from "./BodyText";

const Button = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    // <View style={styles.btnContainer}>
    <ButtonComponent onPress={props.onPress} activeOpacity={0.8}>
      <View style={[styles.btn, props.style]}>
        <BodyText style={[styles.text, props.textStyle]}>
          {props.title}
        </BodyText>
      </View>
    </ButtonComponent>
    // </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
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
