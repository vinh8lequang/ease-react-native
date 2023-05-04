import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./navigators/BottomNav";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <SafeAreaView style={styles.container}> */}
        <BottomNav />
        {/* <StatusBar style="auto" /> */}
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
