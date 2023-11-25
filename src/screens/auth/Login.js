import React from 'react'
import { useNavigation } from "@react-navigation/native";
import AuthTemplate from '../../components/auth/AuthTemplate';

export default function Login() {
    return (
        <AuthTemplate subTitle={"We happy to see you again! to use your account, you should sign in first."} title={"Hi! Welcome Back"} />
    )
}