import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;