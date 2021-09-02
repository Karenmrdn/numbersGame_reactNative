import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

let currentLow = 1;
let currentHigh = 99;

let attemptsCount = 1;

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

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    getRandomIntInclusive(1, 99, userNumber)
  );

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(attemptsCount);
    }
  }, [onGameOver, attemptsCount]);

  const handleNextGuess = (isLower) => {
    if (
      (isLower && currentGuess < userNumber) ||
      (!isLower && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You that this is wrong.", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }

    // incrementAttemptCount();
    attemptsCount++;

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
      <Text>Current guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <Text style={styles.cardText}>The actual number is</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Lower" onPress={() => handleNextGuess(true)} />
          </View>
          <View style={styles.btn}>
            <Button title="Greater" onPress={() => handleNextGuess(false)} />
          </View>
        </View>
      </Card>
      <Text>Attempts counter: {attemptsCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginVertical: 16,
  },
  card: {
    width: "80%",
    alignItems: "center",
    marginBottom: 16,
  },
  cardText: {
    marginBottom: 8,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    width: "35%",
  },
});

export default GameScreen;
