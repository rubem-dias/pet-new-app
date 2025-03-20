import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView 
        source={require('../../../assets/splash-loading.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  animation: {
    width: 150,
    height: 150,
  },
});
