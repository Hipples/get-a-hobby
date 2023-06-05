import { useState } from 'react';
import { Dimensions, View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useUserContext } from '../../contexts/user-context';

const screenWidth = Dimensions.get('window').width

const CreateUser = ({ navigation }) => {
    const [ input, setInput ] = useState("");
    const { user, setUser } = useUserContext();
    const { setItem } = useAsyncStorage('@user');

    const setUsername = async (name) => {
        try {
            await setItem(name);
            setUser(name)
            console.log(`From CreateUser: ${user}`)
        } catch (error) { console.log(error)}
    }

    const handleContinue = () => {
        if (input.length === 0) {
            alert("Please enter at least one character!")
            return
        }
        setUsername(input)
    }

    const handleGoBack = () => {
        navigation.navigate('Welcome');
    }
 
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.loginContainer}>
          <Text 
            label="Name" 
            style={styles.promptText}>
              Enter your name to continue
          </Text>
          <TextInput 
            value={input} 
            onChangeText={(name) => setInput(name)}
            style={styles.userInput} />
          <View style={styles.buttonsContainer}>
          <Button title="Continue" style={styles.continue} onPress={handleContinue} />
          <Button title="Go Back" style={styles.goBack} onPress={handleGoBack}/>
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