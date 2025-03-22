import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { styles } from "../styles/SplashScreen";
import { getToken } from "../utils/secureStorage";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      const token = await getToken();

      if (token) {
        navigation.dispatch(StackActions.replace('Home'));
      } else {
        navigation.dispatch(StackActions.replace('Login'));
      }
    };

    const timer = setTimeout(checkTokenAndNavigate, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);


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
}

