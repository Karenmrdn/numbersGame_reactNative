import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

let counter;

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  const handleGameStart = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  const handleGameOver = (attemptsCounter) => {
    counter = attemptsCounter;
    setIsGameOver(true);
  };

  const handleGameRestart = () => {
    setIsGameOver(false);
  };

  const handleAttemptCounterIncrement = () => {
    setAttemptCount((prev) => prev++);
  };

  let content = <StartGameScreen onGameStart={handleGameStart} />;
  if (userNumber) {
    content = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={handleGameOver}
        incrementAttemptCount={handleAttemptCounterIncrement}
        attemptCount={attemptCount}
      />
    );
  }
  if (isGameOver) {
    content = (
      <GameOver attemptsCounter={counter} onGameRestart={handleGameRestart} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="GUESS A NUMBER!" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 90,
  },
});

export default App;
