import { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useUserContext } from '../../contexts/user-context';
import { styles } from './settings-styles'

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
            style={styles.loginText}>
              Enter your name to continue
          </Text>

          <TextInput 
            value={value} 
            onChangeText={(newValue) => setValue(newValue)}
            style={styles.userInput} />
          
          <View style={styles.buttonsContainer}>
            <Button 
              title="Continue" 
              style={styles.continue} 
              onPress={() => handleContinue()} />
            <Button 
              title="Go Back" 
              style={styles.goBack} 
              onPress={() => handleGoBack()}/>
          </View>

        </View>
      </View>
    );
}

export default CreateUser;