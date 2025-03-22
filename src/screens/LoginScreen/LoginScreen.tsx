import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Image, Animated } from 'react-native';
import { TextInput, Button, Text, Divider } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import styles from "../../styles/LoginScreen";
import { StatusBar } from "expo-status-bar";

const LoginScreen: React.FC = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email:', email, 'Senha:', password);
    };

    const handleGoogleLogin = () => {
        console.log('Login com Google');
    };

    const loginButtonAnim = useRef(new Animated.Value(0)).current;
    const googleButtonAnim = useRef(new Animated.Value(0)).current;
    const logoAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
          Animated.timing(logoAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.stagger(200, [
            Animated.timing(loginButtonAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(googleButtonAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        ]).start();
    }, []);
      
    return (
        <View style={styles.container}>
            <Animated.View
            style={{
                opacity: logoAnim,
                transform: [
                {
                    translateY: logoAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-30, 0],
                    }),
                },
                ],
            }}
            >
            <Image
                source={require('../../../assets/common-logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            </Animated.View>
            <View style={styles.formContainer}>
                <StatusBar style="light" />
                <TextInput
                    label={t('email')}
                    mode="outlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    label={t('password')}
                    mode="outlined"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <Animated.View style={{
                    opacity: loginButtonAnim,
                    transform: [{
                        translateY: loginButtonAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                        }),
                    }]
                }}>
                    <Button
                        mode="contained"
                        onPress={handleLogin}
                        style={styles.loginButton}
                    >
                        {t('login')}
                    </Button>
                </Animated.View>

                <TouchableOpacity onPress={() => console.log('Esqueci minha senha')}>
                    <Text style={styles.forgotPassword}>{t('forgotPassword')}</Text>
                </TouchableOpacity>

                <Divider style={styles.divider} />

                <Animated.View style={{
                    opacity: googleButtonAnim,
                    transform: [{
                        translateY: googleButtonAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                        }),
                    }]
                }}>
                    <Button
                        mode="outlined"
                        icon="google"
                        onPress={handleGoogleLogin}
                        style={styles.googleButton}
                    >
                        {t('loginWithGoogle') || 'Login com Google'}
                    </Button>
                </Animated.View>
            </View>
        </View>
    );
};

export default LoginScreen;
