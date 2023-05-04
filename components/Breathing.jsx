import React, { useRef, useState, useEffect } from "react";
import { Animated, Dimensions, Easing, StyleSheet, View } from "react-native";
import { COLORS } from "../constants";

const { width, height } = Dimensions.get("window");
const circleSize = width / 2;

function Breathing() {
  const move = useRef(new Animated.Value(0)).current;
  const breathIn = Easing.out(Easing.sin);
  const breathOut = Easing.in(Easing.sin);

  Animated.loop(
    Animated.sequence([
      Animated.timing(move, {
        toValue: 1,
        duration: 5000,
        easing: breathIn,
        useNativeDriver: true,
      }),
      Animated.timing(move, {
        toValue: 2,
        duration: 3000,
        easing: breathOut,
        useNativeDriver: true,
      }),
      Animated.timing(move, {
        toValue: 0.0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]),
    { delay: 500 }
  ).start();
  const translate = move.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, circleSize / 6, 0],
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFill,
          opacity: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
          }}
        />
      </View>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = move.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [
            `${item * 45}deg`, //
            `${item * 45 + 180}deg`,
            `${item * 45 + 360}deg`,
          ],
        });
        return (
          <View
            key={item}
            style={{
              ...StyleSheet.absoluteFill,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                opacity: 0.15,
                backgroundColor: COLORS.blue[500],
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2,
                transform: [
                  {
                    rotateZ: rotation,
                  },
                  { translateX: translate },
                  { translateY: translate },
                ],
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: COLORS.blue[600],
  },
});

export default Breathing;
