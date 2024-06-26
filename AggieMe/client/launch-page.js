import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LaunchPage = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to AggieMe</Text>
            <Text style={styles.title}>See What's Next.</Text>
            <Image
                source={require('./assets/logo.png')}
            />
            <TouchableOpacity
                style={[styles.button, styles.loginButton]}
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.registerButton]}
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Register</Text>
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
        fontSize: 24,
        marginBottom: 20,
        color: '#004AAD',
        fontFamily: 'Poppins_800ExtraBold',
    },
    title: {
        fontSize: 30,
        marginBottom: 50,
        color: '#004AAD',
        fontFamily: 'Poppins_800ExtraBold',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Jua_400Regular',
    },
    loginButton: {
        backgroundColor: '#004AAD',
    },
    registerButton: {
        backgroundColor: '#008CBA',
    },
});

export default LaunchPage;