import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Game over!</Text>
      <Text style={styles.attemptInfo}>
        It took you {props.attemptCount} tries
      </Text>
      <Button
        title="Restart"
        onPress={props.onGameRestart}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.secondary,
  },
  attemptInfo: {
    marginVertical: 8,
  },
});

export default GameOver;
