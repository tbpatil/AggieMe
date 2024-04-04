// file to navigate to different pages directly (if you're commiting to main)
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
        title="Go to Dashboard"
        onPress={() => navigation.navigate('HomePage')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      {/* Add navigation to other screens as needed */}
    </View>
  );
}

export default Home;
