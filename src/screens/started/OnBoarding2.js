import React from 'react'
import CertificateSVG from '../../../assets/certificate.svg'
import OnBoardingTemplate from '../../components/OnBoarding/OnBoardingTemplate';
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding2() {
    const navigation = useNavigation();

    return (
        <OnBoardingTemplate title={"Expand Your Career Opporturnity"} subTitle={"Explore the best courses online with thousands of classes in networking, cybersecurity, os & IT, and many more."} onPress={() => navigation.navigate('on-boarding-2')} next={true}>
            <CertificateSVG />
        </OnBoardingTemplate>
    )
}