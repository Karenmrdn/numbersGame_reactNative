import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

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
        <Text>You have entered</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start game"
          onPress={() => props.onGameStart(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardClose}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a number:</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleInputTextChange}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.btnWrapper}>
              <Button onPress={handleReset} title="Reset" />
            </View>
            <View style={styles.btnWrapper}>
              <Button
                onPress={handleConfirm}
                title="Confirm"
                color={colors.primary}
              />
            </View>
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
  outputContainer: {
    marginTop: 16,
    alignItems: "center",
    minWidth: "50%",
  },
});

export default StartGameScreen;
