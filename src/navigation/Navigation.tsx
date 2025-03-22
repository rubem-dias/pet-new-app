import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import { useAuth } from "../context/AuthContext";
import Home from "../screens/Home";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function Navigation() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!user ? (
            <>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} /> 
            </>
          ) : (
            <>
                <Stack.Screen name="Home" component={Home} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
}
