import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const handleGameStart = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  let content = <StartGameScreen onGameStart={handleGameStart} />;
  if (userNumber) {
    content = <GameScreen userNumber={userNumber} />;
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
  },
});

export default App;
