import { Jua_400Regular } from "@expo-google-fonts/jua";
import { Poppins_800ExtraBold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import React from 'react';
import LaunchPage from './launch-page';
import Registration from './registration-page';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,} from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jua_400Regular,
    Poppins_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      {/* <LaunchPage/> */}
      <Registration/>
    </View>
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
