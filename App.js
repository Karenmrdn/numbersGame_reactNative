import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [attemptCount, setAttemptCount] = useState(1);

  console.log("App rerender");

  const handleGameStart = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const handleGameRestart = () => {
    setAttemptCount(1);
    setIsGameOver(false);
  };

  const handleAttemptCountIncrement = () => {
    setAttemptCount((prev) => ++prev);
  };

  let content = <StartGameScreen onGameStart={handleGameStart} />;
  if (userNumber) {
    content = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={handleGameOver}
        attemptCount={attemptCount}
        incrementAttemptCount={handleAttemptCountIncrement}
      />
    );
  }
  if (isGameOver) {
    content = (
      <GameOver attemptCount={attemptCount} onGameRestart={handleGameRestart} />
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
