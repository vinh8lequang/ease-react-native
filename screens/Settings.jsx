import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
