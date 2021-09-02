import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  text: {
    fontSize: 32,
    color: colors.primary,
    textAlign: "center",
  },
});

export default NumberContainer;
