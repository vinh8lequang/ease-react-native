import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

function SoundBtn({ sound }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{sound}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "120%",
    height: 50,
    backgroundColor: COLORS.purple[500],
    borderRadius: 10,
    padding: 10,
    margin: 7,
  },
  text: {
    color: "#fff",
    // fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default SoundBtn;
