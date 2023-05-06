import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Chatbot from "../screens/Chatbot";
import { ROUTES, COLORS } from "../constants";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_NESTED}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.HOME_NESTED} component={Home} />
      <Stack.Screen
        name={ROUTES.CHATBOT}
        component={Chatbot}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTintColor: COLORS.blue[600],
          headerTitle: "Titi Assistant",
          headerTitleStyle: { color: COLORS.black[800] },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
