import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

import { checkData, getData, setData } from './storage';

const Profile = () => {
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');

    useEffect(() => {
        getData(setName, setAge)
    }, [])

    return (
        <View style={styles.page}>
            <Text>Create Profile{'\n'}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder='Name' />
                <Pressable style={styles.submitButton}
                    onPress={() => setData(name, age, setName, setAge)}>
                    <Text>Submit</Text>
                </Pressable>
            </View>
            <View style={styles.outputContainer}>

                <Text>{ name }</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setAge}
                    value={age}
                    placeholder='Age' />
                <Pressable style={styles.submitButton}
                    onPress={() => setData(name, age, setName, setAge)}>
                    <Text>Submit</Text>
                </Pressable>
            </View>
            <View style={styles.outputContainer}>
                <Text>{ age }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: { 
        flexGrow: 1,
        padding: 15 
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1, 
        padding: 5
    }, 
    submitButton: {
        borderWidth: 1, 
        padding: 5
    },
    outputContainer: {
        bottomBorderWidth: 1,
        padding: 15
    }
})

export default Profile;