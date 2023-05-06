import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { COLORS, MOCKDATA2 } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  //to fix the gap between the keyboard and the chatbox
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    setMessages(MOCKDATA2);
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
            backgroundColor: COLORS.blue[500],
          },
          left: {
            backgroundColor: COLORS.gray[600],
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
            color: COLORS.white[500],
          },
          left: {
            color: COLORS.white[500],
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            size={32}
            color={COLORS.blue[600]}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color={"#333"} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend={true}
        renderSend={renderSend}
        placeholder="Talk to Titi here..."
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        // bottomOffset={tabBarHeight}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // bottom: -80,
  },
});

export default Chatbot;
