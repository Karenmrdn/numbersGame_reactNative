import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

const GameOver = (props) => {
  return (
    <View style={styles.wrapper}>
      <TitleText style={styles.title}>Game over!</TitleText>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/success.png")} style={styles.img} />
        {/* <Image
          source={{
            uri: "https://cdn3.vectorstock.com/i/1000x1000/54/77/nature-abstract-mountain-landscape-and-sunset-vector-13825477.jpg",
          }}
          style={styles.img}
        /> */}
      </View>
      <BodyText style={styles.attemptInfo}>
        It took you{" "}
        <Text style={styles.highlightedText}>{props.attemptCount}</Text> tries
      </BodyText>
      <Card style={styles.btnContainer}>
        <Button
          title="Restart with the same number"
          onPress={props.onSameNumberGameRestart}
          style={styles.btnSameNum}
        />
        <Button
          title="Restart with new number"
          onPress={props.onNewNumberGameRestart}
          style={styles.btnNewNum}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: colors.primary,
  },
  highlightedText: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  btnContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnSameNum: {
    width: "40%",
  },
  btnNewNum: {
    width: "40%",
    backgroundColor: colors.secondary,
  },
  attemptInfo: {
    marginVertical: 8,
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: colors.primary,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default GameOver;
