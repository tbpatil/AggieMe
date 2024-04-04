import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LaunchPage = () => {
    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.title}>See What's Next.</Text>
            <Image
                source={require('./assets/LOGO.png')}
            />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login', { navigation })} 
                >
                    <Text style={styles.loginbuttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Registration', { navigation })} // Navigate to 'ProfileScreen' component
                >
                    <Text style={styles.registerbuttonText}>REGISTER</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 75,
        alignSelf: 'flex-start', // Align text to the start (left) of the container
        justifyContent: 'space-around',
        color: '#004AAD',
        fontFamily: 'Jua_400Regular',
    },
    title: {
        fontSize: 25,
        marginBottom: 50,
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        color: 'gray',
        fontFamily: 'Jua_400Regular',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginbuttonText: {
        color: 'white',
        textAlign: 'center', // Center the text inside the button
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 20,
    },
    registerbuttonText: {
        color: '#004AAD',
        textAlign: 'center', // Center the text inside the button
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 20,
    },
    loginButton: {
        backgroundColor: '#004AAD',
        padding: 15,
        borderRadius: 20,
        borderWidth: 2,
        width: 350, // Set width to desired value
        borderColor: '#004AAD',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#F5FCFF',
        padding: 15,
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 2,
        width: 350, // Set width to desired value
        borderColor: '#004AAD',
        fontWeight: 'bold',
    },
});

export default LaunchPage;