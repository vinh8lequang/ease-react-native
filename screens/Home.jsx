import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Breathing from "../components/Breathing";
import SoundBtn from "../components/SoundBtn";
import SoundGrid from "../components/SoundGrid";
import { COLORS, MOCKDATA } from "../constants";
import botLoading from "../assets/titi_loading.gif";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.containerTextTop}>
          {/* <Text style={styles.textBreathe}>
            Breathe-in for 5 seconds, breathe-out for 3 seconds
          </Text> */}
          <Text style={styles.textBreathe}>
            Inspirare per 5 secondi, espirare per 3 secondi.
          </Text>
        </View>
        <Breathing />
      </View>
      <TouchableOpacity style={styles.containerMid}>
        <View style={styles.containerTiti}>
          <View style={{ backgroundColor: COLORS.blue[100], borderRadius: 50 }}>
            <Image style={{ width: 60, height: 60 }} source={botLoading} />
          </View>

          {/* <Text style={styles.textTiti}>Have a talk with Titi assistant</Text> */}
          <Text style={styles.textTiti}>Parlare con l'assistente Titi</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerBottom}>
        <View style={styles.containerPlayer}></View>
        <View style={styles.containerMusic}>
          <View style={styles.containerTextBottom}>
            {/* <Text style={styles.textSelect}>Select a sound to play</Text> */}
            <Text style={styles.textSelect}>
              Selezionare un suono da riprodurre
            </Text>
          </View>
          <SoundGrid soundsArray={MOCKDATA} />
        </View>
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
    flex: 7,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTextTop: {
    top: 5,
  },
  containerMid: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  containerTiti: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.blue[400],
    borderWidth: 1,
    borderColor: COLORS.blue[500],
    borderRadius: 20,
    marginBottom: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textTiti: {
    fontSize: 22,
    color: COLORS.white[100],
    fontWeight: "500",
  },
  containerBottom: {
    flex: 6,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.gray[100],
    // borderWidth: 1,
    // borderColor: COLORS.gray[200],
    alignItems: "stretch",
    justifyContent: "center",
    // alignItems: "center",
    borderRadius: 20,
  },
  containerPlayer: {
    flex: 1,
    backgroundColor: COLORS.gray[200],
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    width: "100%",
    borderRadius: 20,
    marginTop: 5,
    alignSelf: "center",
  },
  containerMusic: {
    flex: 2,
  },
  containerTextBottom: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },
  textBreathe: {
    fontSize: 12,
    color: COLORS.blue[600],
  },
  textSelect: {
    fontSize: 12,
    color: COLORS.purple[600],
  },
});

export default Home;
