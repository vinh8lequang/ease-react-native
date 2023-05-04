import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import Breathing from "../components/Breathing";
import SoundBtn from "../components/SoundBtn";
import SoundGrid from "../components/SoundGrid";
import { COLORS, MOCKDATA } from "../constants";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.containerTextTop}>
          <Text style={styles.textBreathe}>
            Breathe-in for 5 seconds, breathe-out for 3 seconds
          </Text>
        </View>
        <Breathing />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerTextBottom}>
          <Text style={styles.textBreathe}>Select a sound to play</Text>
        </View>
        <SoundGrid soundsArray={MOCKDATA} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white[500],
  },
  containerTop: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTextTop: {
    top: 40,
  },
  containerTextBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 2,
    marginTop: 15,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: COLORS.gray[100],
    alignItems: "stretch",
    // justifyContent: "space-around",
    borderRadius: 20,
  },
  textBreathe: {
    fontSize: 12,
    color: COLORS.purple[500],
  },
});

export default Home;
