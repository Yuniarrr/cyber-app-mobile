import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


// Screens
import HomeScreen from "../screens/HomeScreen";
import Course from "../screens/Course";
import Profile from "../screens/Profile";
import Practice from "../screens/Practice";


// Screen names
const homeName = "Home";
const courseFitur = "Course";
const practiceFitur = "Practice";
const profileFitur = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === courseFitur) {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === practiceFitur) {
            iconName = focused ? "md-folder-open" : "md-folder-open-outline";
          } else if (rn === profileFitur) {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "#1E2857" : "grey"}
            />
          );
        },
        tabBarActiveTintColor: "#1E2857",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          color: "#1E2857", // Set the text color for the tab label
        },
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={courseFitur} component={Course} />
      <Tab.Screen name={practiceFitur} component={Practice} />
      <Tab.Screen name={profileFitur} component={Profile} />
    </Tab.Navigator>
  );
}

export default MainContainer;
