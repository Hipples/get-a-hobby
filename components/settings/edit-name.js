import { useState } from 'react';
import { Modal, Pressable, View, Text, TextInput } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Button from '../common/button';

import { useUserContext } from '../../contexts/user-context';
import { styles } from './settings-styles';

const EditName = ({ modalVisible, toggleModal }) => {
    const [ value, setValue ] = useState("");
    const { setUser } = useUserContext();
    const { setItem } = useAsyncStorage('@user');
    
    const updateUser = async (newName) => {
        try {
            await setItem(newName);
            setUser(newName);
            console.log("Username updated.")
        } catch (error) { console.error(error); }
    }
    const handleSubmit = () => {
        updateUser(value);
        setValue("");
        toggleModal();
    }

    return(
        <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
        transparent={true}
        style={{ justifyContent: 'center'}}>
            <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>What should we call you?</Text>
                    <TextInput 
                        style={styles.userInput}
                        value={value} 
                        onChangeText={(newName) => setValue(newName)}
                        placeholder="Enter name" />
                    <View style={styles.buttonsContainer}>
                      <Button 
                        label="Submit" 
                        buttonStyle={styles.button} labelStyle={styles.buttonText}
                        onPress={() => handleSubmit()} />
                      <Button 
                        label="Cancel" 
                        buttonStyle={styles.button} labelStyle={styles.buttonText}
                        onPress={toggleModal} />
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}

export default EditName;