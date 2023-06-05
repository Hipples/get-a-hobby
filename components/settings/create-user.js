import { useEffect, useState } from 'react';
import { Dimensions, View, Button, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useUserContext } from '../../contexts/user-context';

const screenWidth = Dimensions.get('window').width

const CreateUser = ({ navigation }) => {
    const [ value, setValue ] = useState('');
    const { user, setUser } = useUserContext();
    const { setItem, getItem } = useAsyncStorage('@user');

    const storeUser = async (newValue) => {
        try { await setItem(newValue); setUser(newValue); } 
        catch (error) { console.error(error)}
    }
    const getUser = async() => {
        try {
            const name = await getItem();
            setUser(name);
            console.log(`New user stored: ${user}`)
        } catch (error) { console.error(error) }
    }

    const handleContinue = () => {
        if (value.length === 0) {
            alert("Please enter at least one character!")
        } else {
            storeUser(value);
        }
    }
    const handleGoBack = () => {
        navigation.goBack();
    }
 
    // useEffect(() => { getUser() }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.loginContainer}>
          <Text 
            label="Name" 
            style={styles.promptText}>
              Enter your name to continue
          </Text>
          <TextInput 
            value={value} 
            onChangeText={(newValue) => setValue(newValue)}
            style={styles.userInput} />
          <View style={styles.buttonsContainer}>
          <Button title="Continue" style={styles.continue} onPress={() => handleContinue()} />
          <Button title="Go Back" style={styles.goBack} onPress={() => handleGoBack()}/>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
      flexBasis: 300,
      width: screenWidth-20,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20, 
      borderRadius: 20
    },
    promptText: {
      fontSize: 20,
      color: 'black',
      marginBottom: 10
    },
    userInput: {
      flexBasis: 100,
      fontSize: 50,
      padding: 10,
      width: screenWidth-50,
      backgroundColor: 'aliceblue',
      borderWidth: 1
    },
    buttonsContainer: {
      flexDirection: 'row', 
      marginTop: 10,
      columnGap: 10,
      width: screenWidth-50,
      justifyContent: 'flex-end',
    },
    continue: {},
    goBack: {}
  });

export default CreateUser;