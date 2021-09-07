import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BodyText from "../components/BodyText";
import Button from "../components/Button";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollWrapper}>
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
    </ScrollView>
  );
};

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const isBigWidth = width > 350;

const styles = StyleSheet.create({
  scrollWrapper: {
    flexGrow: 1,
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: isBigWidth ? 32 : 24,
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
    width: "45%",
  },
  btnNewNum: {
    width: "45%",
    backgroundColor: colors.secondary,
  },
  attemptInfo: {
    fontSize: isBigWidth ? 16 : 12,
    marginVertical: 8,
  },
  imgContainer: {
    width: height * 0.4,
    height: height * 0.4,
    borderRadius: (height * 0.4) / 2,
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
