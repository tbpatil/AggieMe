import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const Login = (props) => {
    return(
        <View style= {{flexDirection: 'column'}}>

            <Text style={styles.login}>LOGIN</Text>
            <Text style={[styles.creds, styles.email]}>Your email:</Text>
            <TextInput style={styles.emailbox}/>
            <Text style={[styles.creds, styles.pass]}>Password:</Text>
            <TextInput style={styles.passbox}/>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.accountexist}>Don't have an account? Register</Text>
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
    login: {
        position: 'relative',
        top: 100,
        textAlign: 'center',
        fontSize: 45,
        color: '#004AAD',
        fontFamily: 'Poppins_800ExtraBold',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#004AAD',
        alignSelf: 'center', // Center the button horizontally
        justifyContent: 'center', // Center the button vertically
        marginTop: 300, // Add some space between the password textbox and button
        borderRadius: 10,
        width: 250, // Set width to desired value
        height: 35,
        top: 70
    },
    loginButtonText: {
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
        paddingHorizontal: 10,
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
    accountexist: {
        alignSelf: 'center', // Center the text horizontally
        marginTop: 20, // Add some space between the button and text
        fontSize: 16,
        top: 90
    }
});

export default Login;