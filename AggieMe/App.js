import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'; // Make sure to import Home
import Registration from './registration-page';
import ProfileScreen from './profile-page';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Jua_400Regular } from "@expo-google-fonts/jua";
import { Poppins_800ExtraBold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Jua_400Regular,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
