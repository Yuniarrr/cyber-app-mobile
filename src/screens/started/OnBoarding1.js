import React from 'react'
import BookStackSVG from '../../../assets/book-stack.svg'
import OnBoardingTemplate from '../../components/OnBoarding/OnBoardingTemplate';
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding1() {
    const navigation = useNavigation();

    return (
        <OnBoardingTemplate title={"Various Class Choices In One App"} subTitle={"Learn from the best in the field. Our subject matter experts committed to your success."} onPress={() => navigation.navigate('on-boarding-2')}>
            <BookStackSVG />
        </OnBoardingTemplate>
    )
}