import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <TextInput {...props} style={[styles.input, props.style]}>
      {props.children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 4,
    padding: 4,
    borderRadius: 8,
  },
});

export default Input;
