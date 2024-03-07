import React from 'react';
import { View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Other components */}
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      {/* Add navigation to other screens as needed */}
    </View>
  );
}

export default Home;
