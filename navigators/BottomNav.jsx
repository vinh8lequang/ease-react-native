import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import Home from "../screens/Home";
import Chatbot from "../screens/Chatbot";
import Settings from "../screens/Settings";
import Icon from "react-native-vector-icons/Ionicons";
import { ROUTES, COLORS } from "../constants";
import botIcon from "../assets/titi_happy.gif";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.blue[600],
        tabBarInactiveTintColor: COLORS.gray[500],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.SETTINGS) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.CHATBOT) {
            iconName = "glasses-outline";
            return <Icon name={iconName} size={33} color={color} />;
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen
        name={ROUTES.CHATBOT}
        component={Chatbot}
        options={{
          tabBarLabel: "Assistant",
          headerShown: true,
          headerTitle: "Titi Assistant",
          headerTitleAlign: "left",
          headerLeft: () => (
            <View
              style={{
                backgroundColor: COLORS.blue[100],
                width: 38,
                height: 38,
                marginLeft: 20,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image style={{ width: 35, height: 35 }} source={botIcon} />
            </View>
          ),
          // tabBarStyle: {
          //   display: "none",
          // },
        }}
      />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomNav;
