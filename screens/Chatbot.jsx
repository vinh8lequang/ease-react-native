import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { COLORS } from "../constants";
import botIcon from "../assets/titi_static/neutral2.png";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 10,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "User",
        },
      },
      {
        _id: 9,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "User",
        },
      },
      {
        _id: 8,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "User",
        },
      },
      {
        _id: 7,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "User",
        },
      },
      {
        _id: 6,
        text: "Hello developer 1",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: botIcon,
        },
      },
      {
        _id: 5,
        text: "Hello developer 1",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: botIcon,
        },
      },
      {
        _id: 4,
        text: "Hello developer 2",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: botIcon,
        },
      },
      {
        _id: 3,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "User",
        },
      },
      {
        _id: 1,
        text: "Hello developer 1",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: botIcon,
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: botIcon,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.purple[500],
          },
          left: {
            backgroundColor: COLORS.blue[500],
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#fff",
          },
        }}
        timeTextStyle={{
          right: {
            color: COLORS.white[200],
          },
          left: {
            color: COLORS.white[200],
          },
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chatbot;
