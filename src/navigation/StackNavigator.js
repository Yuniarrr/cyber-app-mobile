import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Search from "../screens/Search";
import Settings from "../screens/Settings";
import DetailCourse from "../screens/course/DetailCourse";
import DetailTopic from "../screens/course/DetailTopic";
import Splash from "../screens/started/Splash";
import OnBoarding1 from "../screens/started/OnBoarding1";
import OnBoarding2 from "../screens/started/OnBoarding2";
import GetStarted from "../screens/started/GetStarted";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import SeeMorePopularCourses from "../screens/SeeMorePopularCourses";
import SeeMoreSuggestion from "../screens/SeeMoreSuggestion";
import SeeMoreDidYouKnow from "../screens/SeeMoreDidYouKnow";
import PreQuiz from "../screens/practice/PreQuiz";
import DetailPractice from "../screens/practice/DetailPractice";
import Quiz1 from "../screens/practice/Quiz1";
import Quiz2 from "../screens/practice/Quiz2";
import Result from "../screens/practice/Result";

const RootStack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <RootStack.Navigator initialRouteName="splash">
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
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="detail-course"
                    component={DetailCourse}
                />
                <RootStack.Screen
                    name="detail-topic"
                    component={DetailTopic}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="splash"
                    component={Splash}
                />
                <RootStack.Screen
                    name="on-boarding-1"
                    component={OnBoarding1}
                />
                <RootStack.Screen
                    name="on-boarding-2"
                    component={OnBoarding2}
                />
                <RootStack.Screen
                    name="get-started"
                    component={GetStarted}
                />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name="login"
                    component={Login}
                />
                <RootStack.Screen
                    name="register"
                    component={Register}
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
                <RootStack.Screen
                    name="prequiz"
                    component={PreQuiz}
                />
                <RootStack.Screen
                    name="detail-practice"
                    component={DetailPractice}
                />
                <RootStack.Screen
                    name="quiz-1"
                    component={Quiz1}
                />
                <RootStack.Screen
                    name="quiz-2"
                    component={Quiz2}
                />
                <RootStack.Screen
                    name="result"
                    component={Result}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default StackNavigator;
