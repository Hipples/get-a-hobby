import { useState } from 'react';
import { Modal, Pressable, View, Text, TextInput, Keyboard } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Button from '../common/button';

import { useUserContext } from '../../contexts/user-context';
import { EditNameBackground, styles } from './settings-styles';

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
        transparent={true}>
            <Pressable style={styles.editNameContainer} onPress={() => Keyboard.dismiss()}>
                <EditNameBackground style={styles.modalContainer}>
                    <Text style={styles.editNamePrompt}>What should we call you?</Text>
                    <TextInput 
                        style={styles.editNameInput}
                        value={value} 
                        onChangeText={(newName) => setValue(newName)}
                        placeholder="Enter name" 
                        placeholderTextColor="#6666" />
                    <View style={styles.buttonsContainer}>
                      <Button 
                        label="Submit" 
                        buttonStyle={[styles.button, styles.continue]} labelStyle={styles.buttonText}
                        onPress={() => handleSubmit()} />
                      <Button 
                        label="Cancel" 
                        buttonStyle={[styles.button, styles.cancel]} labelStyle={styles.buttonText}
                        onPress={toggleModal} />
                    </View>
                </EditNameBackground>
            </Pressable>
        </Modal>
    );
}

export default EditName;