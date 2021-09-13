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
    <View style={[styles.btnCont, props.style]}>
      <ButtonComponent onPress={props.onPress} style={{ flex: 1 }}>
        <View style={styles.btn}>
          <BodyText style={[styles.text, props.textStyle]}>
            {props.title}
          </BodyText>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btnCont: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: "center",
  },
  btn: {
    padding: 8,
    width: "100%",
  },
  text: {
    width: "100%",
    color: "white",
    fontFamily: "open-sans-bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Button;
