import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

let currentLow = 1;
let currentHigh = 99;

const getRandomIntInclusive = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (generatedNumber === exclude) {
    return getRandomIntInclusive(min, max, exclude);
  } else {
    return generatedNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    getRandomIntInclusive(1, 99, props.userNumber)
  );

  const handleNextGuess = (isLower) => {
    if (
      (isLower && currentGuess < props.userNumber) ||
      (!isLower && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You that this is wrong.", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }

    if (isLower) {
      currentHigh = currentGuess;
    } else {
      currentLow = currentGuess;
    }
    setCurrentGuess((prev) =>
      getRandomIntInclusive(currentLow, currentHigh, prev)
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text>Opponents's guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <View style={styles.btn}>
          <Button title="Lower" onPress={() => handleNextGuess(true)} />
        </View>
        <View style={styles.btn}>
          <Button title="Greater" onPress={() => handleNextGuess(false)} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginVertical: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  btn: {
    width: "35%",
  },
});

export default GameScreen;
