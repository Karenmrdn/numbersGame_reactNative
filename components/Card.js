import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 8,
    backgroundColor: "#fff",
  },
});

export default Card;
