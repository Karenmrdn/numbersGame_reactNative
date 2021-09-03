import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

let currentLow;
let currentHigh;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GameScreen = ({
  userNumber,
  onGameOver,
  attemptCount,
  incrementAttemptCount,
}) => {
  const [currentGuess, setCurrentGuess] = useState(
    getRandomIntInclusive(1, 99)
  );

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    currentLow = 1;
    currentHigh = 99;
  }, []);

  const handleNextGuess = (isLower) => {
    if (
      (isLower && currentGuess < userNumber) ||
      (!isLower && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong.", [
        { text: "OK", style: "destructive" },
      ]);
      return;
    }

    incrementAttemptCount();

    if (isLower) {
      currentHigh = currentGuess;
    } else {
      currentLow = currentGuess;
    }
    setCurrentGuess(getRandomIntInclusive(currentLow + 1, currentHigh - 1));
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
      <Text>Attempts counter: {attemptCount}</Text>
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
