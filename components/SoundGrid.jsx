import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SoundBtn from "./SoundBtn";

function SoundGrid({ soundsArray }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={soundsArray}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <SoundBtn sound={item.sound} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "auto",
  },
  columnWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SoundGrid;
