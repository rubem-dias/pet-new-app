import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Text, TextInput, useTheme } from 'react-native-paper';
import { useAuth } from "../context/AuthContext";
import styles from "../styles/LoginScreen";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Alert } from "../components/GlobalAlert";
import { LoginCredentials } from "../types/auth";


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {

    const { t } = useTranslation();

    const theme = useTheme();

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: '',
    });

    const { login } = useAuth();
    
    const handleLogin = async () => {

        const handleLoginContext = await login(credentials);

        if (!handleLoginContext) {
            Alert.error('Erro ao entrar', 'Email ou senha incorretos!');
        }
    };

    const handleGoogleLogin = () => {
        throw new Error('Function not implemented.');
    };

    const logoAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(logoAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <StatusBar style="light" />

            <Animated.View
                style={{
                    opacity: logoAnim,
                    transform: [{
                        translateY: logoAnim.interpolate({ inputRange: [0, 1], outputRange: [-30, 0] }),
                    }],
                }}
            >
                <Image
                    source={require('../../assets/common-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </Animated.View>

            <View style={styles.formContainer}>
                <TextInput
                    label={t('email')}
                    mode="outlined"
                    keyboardType="email-address"
                    value={credentials.email}
                    onChangeText={(text) => setCredentials((prev) => ({ ...prev, email: text }))}
                    style={styles.input}
                />

                <TextInput
                    label={t('password')}
                    mode="outlined"
                    secureTextEntry
                    value={credentials.password}
                    onChangeText={(text) => setCredentials((prev) => ({ ...prev, password: text }))}
                    style={styles.input}
                />

                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={styles.loginButton}
                    disabled={!credentials.email.trim() || !credentials.password.trim()}
                >
                {t('login')}
                </Button>

                <TouchableOpacity onPress={() => console.log('Esqueci minha senha')}>
                    <Text style={styles.forgotPassword}>{t('forgotPassword')}</Text>
                </TouchableOpacity>

                <Divider style={styles.divider} />

                <Text style={{ textAlign: "center", marginVertical: 10 }}>{t('orLoginWith')}</Text>

                <Button mode="outlined" icon="google" onPress={handleGoogleLogin} style={styles.googleButton}>
                    {t('loginWithGoogle')}
                </Button>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ marginTop: 40, textAlign: "center" }}>
                        {t('newHere')} {' '}
                        <Text style={{ color: theme.colors.primary, fontWeight: "bold" }}>
                            {t('registerAccount')}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Login;