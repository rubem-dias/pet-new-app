// src/screens/Register.tsx

import React, { useState } from 'react';
import {
    View, Image, ScrollView, KeyboardAvoidingView,
    Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import styles from '../styles/LoginScreen';
import mockUsers from '../test/mocks/mockUsers.json';
import { Alert } from '../components/GlobalAlert';
import { RegisterCredentials } from '../types/register';
import { validateRegistration } from "../utils/formValidations";

const Register: React.FC<{ navigation: any; }> = ({ navigation }) => {
    const { t } = useTranslation();

    const [confirmPassword, setConfirmPassword] = useState('');

    const [registration, setRegistration] = useState<RegisterCredentials>({
        email: '',
        password: '',
        phone: null
    });

    const handleRegister = () => {

        const validation = validateRegistration(registration, confirmPassword);

        if (!validation.valid) {
            Alert.error(validation.title!, validation.message!);
            return;
        }

        mockUsers.push({
            email: registration.email,
            password: registration.password,
            role: "user",
            name: "User"
        });

        Alert.success('Registrado com sucesso', 'Efetue o login para continuar!');
        navigation.navigate('Login');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                    <Image
                        source={require('../../assets/common-logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.formContainer}>
                        <TextInput
                            label={t('email')}
                            mode="outlined"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            value={registration.email}
                            onChangeText={(email) => setRegistration(prev => ({ ...prev, email }))}
                            style={styles.input}
                        />
                        <TextInput
                            label={t('password')}
                            mode="outlined"
                            secureTextEntry
                            value={registration.password}
                            onChangeText={(password) => setRegistration(prev => ({ ...prev, password }))}
                            style={styles.input}
                        />
                        <TextInput
                            label={t('confirmPassword')}
                            mode="outlined"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            style={styles.input}
                        />
                        <Button
                            mode="contained"
                            onPress={handleRegister}
                            style={styles.loginButton}
                        >
                            {t('register')}
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Login')}
                            style={{ marginTop: 10 }}
                        >
                            {t('iAlreadyHaveAccount')}
                        </Button>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Register;
