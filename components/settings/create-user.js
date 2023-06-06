import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useUserContext } from '../../contexts/user-context';
import { styles } from './settings-styles'

// pops up when a new user presses Get Started! on the Welcome screen
// users can enter their name to gain entry to the rest of the application
const CreateUser = ({ navigation }) => {
    const [ value, setValue ] = useState('');
    const { setUser } = useUserContext();
    const { setItem } = useAsyncStorage('@user');

    const storeUser = async (newValue) => {
        try { await setItem(newValue); setUser(newValue); } 
        catch (error) { console.error(error)}
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
 
    return (
      <View style={styles.loginPage}>
        <View style={styles.loginContainer}>
          
          <Text 
            label="Name" 
            style={styles.loginPrompt}>
              Enter a name to continue!
          </Text>

          <TextInput 
            value={value} 
            onChangeText={(newValue) => setValue(newValue)}
            style={styles.userInput}
            autoFocus={true}
            maxLength={20} />
          
          <View style={styles.buttonsContainer}>
            <Pressable 
              style={styles.button} 
              onPress={() => handleContinue()}>
                <Text style={styles.continue}>Continue</Text>
            </Pressable>
            <Pressable 
              style={styles.button} 
              onPress={() => handleGoBack()}>
                <Text style={styles.goBack}>Go Back</Text>
            </Pressable>
          </View>

        </View>
      </View>
    );
}

export default CreateUser;