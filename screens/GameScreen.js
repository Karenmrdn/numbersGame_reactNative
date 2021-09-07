import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";
import Button from "../components/Button";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

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
  onNewGuess,
  pastGuesses,
  availableDeviceWidth,
  availableDeviceHeight,
}) => {
  const initialGuess = getRandomIntInclusive(1, 99).toString();
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    currentLow = 1;
    currentHigh = 99;
    onNewGuess(initialGuess);
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber.toString()) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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

    if (isLower) {
      currentHigh = +currentGuess;
    } else {
      currentLow = +currentGuess;
    }

    const newGuess = getRandomIntInclusive(
      currentLow + 1,
      currentHigh - 1
    ).toString();

    setCurrentGuess(newGuess);
    onNewGuess(newGuess);
  };

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.wrapper}>
        <TitleText style={styles.title}>Current guess:</TitleText>
        <View style={styles.smallScreenControls}>
          <Button
            title="Lower"
            onPress={() => handleNextGuess(true)}
            style={styles.btn}
          />
          <NumberContainer>{currentGuess}</NumberContainer>
          <Button
            title="Greater"
            onPress={() => handleNextGuess(false)}
            style={styles.btn}
          />
        </View>
        <BodyText>Attempts counter: {attemptCount}</BodyText>
        <View
          style={[
            styles.listContainer,
            { width: availableDeviceWidth > 350 ? "60%" : "70%" },
          ]}
        >
          <FlatList
            data={pastGuesses}
            keyExtractor={(item) => item}
            renderItem={(itemData) => (
              <View style={styles.listItem}>
                <BodyText>#{pastGuesses.length - itemData.index}</BodyText>
                <BodyText>{itemData.item}</BodyText>
              </View>
            )}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <TitleText style={styles.title}>Current guess:</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <BodyText style={styles.cardText}>The actual number is</BodyText>
        <View style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={() => handleNextGuess(true)}
            style={styles.btn}
          />
          <Button
            title="Greater"
            onPress={() => handleNextGuess(false)}
            style={styles.btn}
          />
        </View>
      </Card>
      <BodyText>Attempts counter: {attemptCount}</BodyText>
      <View
        style={[
          styles.listContainer,
          { width: availableDeviceWidth > 350 ? "60%" : "70%" },
        ]}
      >
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <View key={guess} style={styles.listItem}>
              <BodyText>#{pastGuesses.length - index}</BodyText>
              <BodyText>{guess}</BodyText>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={pastGuesses}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <BodyText>#{pastGuesses.length - itemData.index}</BodyText>
              <BodyText>{itemData.item}</BodyText>
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 16,
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
    backgroundColor: colors.secondary,
  },
  listContainer: {
    marginTop: 8,
    flex: 1,
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
    // width: "80%",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    width: "100%",
  },
  smallScreenControls: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default GameScreen;
