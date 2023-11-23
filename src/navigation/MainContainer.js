import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; 


// Screens
import HomeScreen from "./screens/HomeScreen";
import Course from "./screens/Course";
import Profile from "./screens/Profile";
import Wishlist from "./screens/Wishlist";


// Screen names
const homeName = "Home";
const courseFitur = "Course";
const wishlistFitur = "Wishlist";
const profileFitur = "Profile";


const Tab = createBottomTabNavigator();



function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === courseFitur) {
              iconName = focused ? "ios-globe" : "ios-globe-outline";
            } else if (rn === wishlistFitur) {
              iconName = focused ? "heart" : "heart-outline";
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
        <Tab.Screen name={wishlistFitur} component={Wishlist} />
        <Tab.Screen name={profileFitur} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
