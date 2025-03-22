import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from "../context/AuthContext";

const HomeScreen = () => {
    
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
