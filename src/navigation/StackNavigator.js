import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Search from "../screens/Search";
import SeeMorePopularCourses from "../screens/SeeMorePopularCourses";
import SeeMoreSuggestion from "../screens/SeeMoreSuggestion";
import SeeMoreDidYouKnow from "../screens/SeeMoreDidYouKnow";
import SearchResult from "../screens/SearchResult";

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
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="seemorepopularcourses"
                    component={SeeMorePopularCourses}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="seemoresuggestion"
                    component={SeeMoreSuggestion}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="seemoredidyouknow"
                    component={SeeMoreDidYouKnow}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="searchresult"
                    component={SearchResult}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StackNavigator;
