import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const Registration = (props) => {
    return(
        <View style= {{flexDirection: 'column'}}>
            <Image 
                style={styles.back}
                source={require('./assets/backButton.png')}
            />
            <Text style={styles.back_text}>Back</Text>
            <Text style={styles.register}>REGISTER</Text>
            <Text style={[styles.creds, styles.email]}>Your email:</Text>
            <TextInput style={styles.emailbox}/>
            <Text style={[styles.creds, styles.pass]}>Password:</Text>
            <TextInput style={styles.passbox}/>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.accountexist}>Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    back_text: {
        position: 'relative',
        top: -146,
        left: 20,
        fontSize: 25,
        fontFamily: 'Jua_400Regular'
    },
    back: {
        position: 'relative',
        top: -110,
        left: -40,
        width: 50,
        height: 50,
    },
    register: {
        position: 'relative',
        top: -120,
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
        marginTop: 20, // Add some space between the password textbox and button
        borderRadius: 10,
        width: 250, // Set width to desired value
        height: 35,
        top: 70
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
        top: -70,
    },
    pass: {
        position: 'relative',
        top: -45,
    },
    emailbox: {
        position: 'relative',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 15,
        top: -60,
        backgroundColor: 'rgba(0, 74, 173, 0.52)', // Change color to blue
        color: 'white', // Change text color to white for better visibility
        paddingHorizontal: 10,
    },
    passbox: {
        position: 'relative',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 15,
        top: -35,
        backgroundColor: '#rgba(0, 74, 173, 0.52)', // Change color to blue
        color: 'white', // Change text color to white for better visibility
        paddingHorizontal: 10,
    },
    accountexist: {
        alignSelf: 'center', // Center the text horizontally
        marginTop: 20, // Add some space between the button and text
        fontSize: 16,
        top: 90
    }
});

export default Registration;