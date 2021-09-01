import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Enter a number:</Text>
        <Input style={styles.input} keyboardType="number-pad" maxLength={2} />
        <View style={styles.buttonsContainer}>
          <View style={styles.btnWrapper}>
            <Button title="Reset" />
          </View>
          <View style={styles.btnWrapper}>
            <Button title="Confirm" color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginVertical: 16,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  input: { width: "20%", textAlign: "center" },
  buttonsContainer: {
    flexDirection: "row",
    width: "65%",
    justifyContent: "space-between",
  },
  btnWrapper: {
    width: "45%",
    borderRadius: 16,
  },
});

export default StartGameScreen;
