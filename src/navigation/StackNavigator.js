import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Search from "../screens/Search";
import Settings from "../screens/Settings";

const RootStack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <RootStack.Navigator initialRouteName="main">
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="main"
                    component={TabNavigator}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="search"
                    component={Search}
                />
                <RootStack.Screen
                    name="settings"
                    component={Settings}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StackNavigator;
