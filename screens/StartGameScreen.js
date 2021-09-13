import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BodyText from "../components/BodyText";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 3.5
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 3.5);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

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
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                  style={{ width: buttonWidth }}
                />
                <Button
                  onPress={handleConfirm}
                  title="Confirm"
                  color={colors.primary}
                  style={[styles.btnConfirm, { width: buttonWidth }]}
                />
              </View>
            </Card>
            {confirmOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  title: {
    marginBottom: 16,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  input: { width: "20%", textAlign: "center" },
  buttonsContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
  btnConfirm: {
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
