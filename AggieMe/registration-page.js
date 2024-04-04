import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';

const Registration = ({ navigation }) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Here you would usually send a request to your Node.js server
        // For the purpose of this example, we'll just log the credentials
        console.log('Login with:', email, password);
          // Regular expression to validate the email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
          // Validate if the username is in the correct email format
          if (emailRegex.test(email)) {
            // If the email is valid, proceed with the login
            // TODO: Send a request to your Node.js server to validate the credentials
            // Navigate to the HomeScreen if the login is successful
            navigation.navigate('HomePage');
          } else {
            // If the email is not valid, alert the user
            alert('Please enter a valid email address.');
            
          }
      };
    return(
        <View style= {{flexDirection: 'column'}}>

            <Text style={styles.register}>REGISTER</Text>
            <Text style={[styles.creds, styles.email]}>Your email:</Text>
            <TextInput
            style={styles.emailbox}
            onChangeText={setUsername}
            value={email}
            placeholder="Email"
            autoCapitalize="none"/>
            <Text style={[styles.creds, styles.pass]}>Create Password:</Text>
            <TextInput style={styles.passbox}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            autoCapitalize="none"
            />
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.donthaveaccount}>Already have an account?</Text>
                <Button style={styles.dhar} title="LOGIN" onPress={() => navigation.navigate('Login')}/>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    // back_text: {
    //     position: 'relative',
    //     top: -146,
    //     left: 20,
    //     fontSize: 25,
    //     fontFamily: 'Jua_400Regular'
    // },
    // back: {
    //     position: 'relative',
    //     top: 50,
    //     left: -40,
    //     width: 50,
    //     height: 50,
    // },
    register: {
        position: 'relative',
        top: 100,
        textAlign: 'center',
        fontSize: 45,
        color: '#004AAD',
        fontFamily: 'Poppins_800ExtraBold',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#004AAD',
        alignSelf: 'center', // Center the button horizontally
        justifyContent: 'center', // Center the button vertically
        marginTop: 300, // Add some space between the password textbox and button
        borderRadius: 10,
        width: 250, // Set width to desired value
        height: 35,
        top: -20
    },
    registerButtonText: {
        color: 'white',
        textAlign: 'center', // Center the text inside the button
        fontFamily: 'Jua_400Regular',
        fontSize: 20,
    },
    creds: {
        fontFamily: 'Jua_400Regular',
        color: '#004AAD',
        fontSize: 18
    },
    email: {
        position: 'relative',
        top: 150,
    },
    pass: {
        position: 'relative',
        top: 200,
    },
    emailbox: {
        position: 'relative',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 15,
        top: 175,
        backgroundColor: 'rgba(0, 74, 173, 0.52)', // Change color to blue
        color: 'white', // Change text color to white for better visibility
        paddingHorizontal: 25,
    },
    passbox: {
        position: 'relative',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 100,
        top: 215,
        backgroundColor: '#rgba(0, 74, 173, 0.52)', // Change color to blue
        color: 'white', // Change text color to white for better visibility
        paddingHorizontal: 10,
    },
    loginButton: {
        alignSelf: 'center', // Center the text horizontally
        marginTop: 20, // Add some space between the button and text
        fontSize: 16,
        top: 0
    },
    donthaveaccount: {
        alignSelf: 'center', // Center the text horizontally
        marginTop: 20, // Add some space between the button and text
        fontSize: 16,
    },
    dhar: {
        alignSelf: 'center', // Center the text horizontally
        marginTop: 20, // Add some space between the button and text
        fontSize: 16,
    }
});

export default Registration;