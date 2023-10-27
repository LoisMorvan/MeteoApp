import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AboutPage extends React.Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.about}>It is an application that gives you the weather of your current location and you can search the weather of any city in the world</Text>
                    <Text>MORVAN Loïs</Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    about: {
        marginBottom: 50,
        textAlign: 'center',
    },
});

export default AboutPage;