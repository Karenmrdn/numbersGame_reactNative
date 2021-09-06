import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInputTextChange = (value) => {
    if (value.includes(".") || value.includes(",")) {
      return;
    } else {
      setEnteredValue(value);
    }
  };

  const handleKeyboardClose = () => {
    Keyboard.dismiss();
  };

  const handleReset = () => {
    setEnteredValue("");
  };

  const handleConfirm = () => {
    if (isNaN(enteredValue) || enteredValue <= 0 || enteredValue > 99) {
      Alert.alert(
        "Invalid number!",
        "Entered value must be a number between 1 and 99.",
        [{ text: "OK", style: "destructive", onPress: handleReset }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(Number(enteredValue));
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = (
      <Card style={styles.outputContainer}>
        <BodyText>You have entered</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start game"
          onPress={() => props.onGameStart(selectedNumber)}
          style={styles.btnStart}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardClose}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>The Game Screen</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Enter a number:</BodyText>
          <Input
            style={styles.input}
            blurOn
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleInputTextChange}
          />
          <View style={styles.buttonsContainer}>
            <Button
              onPress={handleReset}
              title="Reset"
              style={styles.btnReset}
            />
            <Button
              onPress={handleConfirm}
              title="Confirm"
              color={colors.primary}
              style={styles.btnConfirm}
            />
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
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
  btnReset: {
    width: "45%",
  },
  btnConfirm: {
    width: "45%",
    backgroundColor: colors.secondary,
  },
  btnStart: {
    backgroundColor: colors.secondary,
  },
  outputContainer: {
    marginTop: 16,
    alignItems: "center",
    minWidth: "50%",
  },
});

export default StartGameScreen;
