import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, ComicNeue_300Light } from '@expo-google-fonts/comic-neue';

const Title = () => {
    let [fontsLoaded] = useFonts({ComicNeue_300Light});
    let fontSize = 24;
    let paddingVertical = 6;

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>GetAHobby</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    title: {
        fontFamily: "ComicNeue_300Light",
        fontSize: 50
    }
});

export default Title;