import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import styles from "../../styles/LoginScreen";

const LoginScreen: React.FC = () => {

  const { t } = useTranslation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Senha:', password);
  };

  //TODO: implement context
  
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
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

        <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
          {t('login')}
        </Button>

        <TouchableOpacity onPress={() => console.log('Esqueci minha senha')}>
          <Text style={styles.forgotPassword}>{t('forgotPassword')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
