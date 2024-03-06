import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install this package

const HomePage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.welcome}>Welcome,</Text>
                <Text style={styles.instructions}>Scan the QR-code to get more information.</Text>
            </View>
            <View style={styles.qrCodePlaceholder}>
                <MaterialIcons name="qr-code-2" size={300} color="#004AAD" /> {/* Increased size */}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileButtonText}>Edit Your Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 150,
        paddingBottom: 50,
        paddingHorizontal: 25,
    },
    headerContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start', // Align items to the left
        marginBottom: 50,
    },
    welcome: {
        fontSize: 65,
        textAlign: 'left', // Align text to the left
        color: '#004AAD',
        fontWeight: 'bold',
    },
    instructions: {
        fontSize: 23,
        textAlign: 'left',
        color: 'black',
        fontWeight: 'bold',

    },
    qrCodePlaceholder: {
        marginBottom: 100,
    },
    buttonContainer: {
        width: '100%',
    },
    editProfileButton: {
        backgroundColor: '#004AAD',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
        fontWeight: 'bold',

    },
    logoutButton: {
        backgroundColor: '#F5FCFF',
        padding: 15,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#004AAD',
        fontWeight: 'bold',

    },
    editProfileButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    logoutButtonText: {
        color: '#004AAD',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomePage;