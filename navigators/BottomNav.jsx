import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Chatbot from "../screens/Chatbot";
import Settings from "../screens/Settings";
import Icon from "react-native-vector-icons/Ionicons";
import { ROUTES, COLORS } from "../constants";
import botIcon from "../assets/titi_happy.gif";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.blue[600],
        tabBarInactiveTintColor: COLORS.gray[500],
        tabBarStyle: {
          // position: "relative",
          // bottom: -35, //to lower the tab bar
          // height: 60,
          // transform: [{ translateY: 30 }],
        },
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
            <Image
              style={{ width: 40, height: 40, marginLeft: 20 }}
              source={botIcon}
            />
          ),
        }}
      />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomNav;
