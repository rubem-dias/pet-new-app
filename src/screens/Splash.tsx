import React, { useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import LoadingScreen from '../components/LoadingScreen';
import { getToken } from '../utils/secureStorage';

export default function Splash() {
    const navigation = useNavigation();

    const checkAndNavigate = async () => {
        const token = await getToken();
        navigation.dispatch(StackActions.replace(token ? 'Home' : 'Login'));
    };

    useEffect(() => {
        const timeoutDuration = 1500;

        const timer = setTimeout(() => {
            checkAndNavigate();
        }, timeoutDuration);

        return () => clearTimeout(timer);
    }, []);

    return <LoadingScreen />;
}
