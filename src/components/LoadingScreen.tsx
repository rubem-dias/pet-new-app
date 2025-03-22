// src/components/LoadingScreen.tsx
import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/SplashScreen';

interface LoadingScreenProps {
    duration?: number;
    onFinish?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration, onFinish }) => {

    React.useEffect(() => {
        let timer: NodeJS.Timeout;

        if (duration && onFinish) {
            timer = setTimeout(onFinish, duration);
        }

        return () => timer && clearTimeout(timer);
    }, [duration, onFinish]);

    return (
        <View style={styles.container}>
            <LottieView 
                source={require('../../assets/splash-loading.json')}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
};

export default LoadingScreen;
