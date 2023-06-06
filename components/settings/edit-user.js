import { useEffect, useState } from 'react';
import { Keyboard, Modal, Pressable, Text, TextInput, View } from 'react-native';
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
        <>
        <View>
            <Text></Text>
        </View>
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
                        style={styles.editUser}
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
        </>
    )
}

const GreetUser = () => {
    const [ currentUser, setCurrentUser ] = useState(user);
    const { user } = useUserContext();
    const { getItem } = useAsyncStorage('@user');

    const getStoredUser = async () => {
        try{
            const data = await getItem();
            setCurrentUser(data)
        }
        catch(error){ console.error(error) }
    }

    useEffect(() => { getStoredUser() }, []);
    console.log(`Hello from settings, ${currentUser}!`);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{fontsize: 30}}>Hey { user }!</Text>
            <Text style={{fontsize: 30}}>What would you like to do?</Text>
        </View>
    )
}

const EditUser = () => {
    const [ modalVisible, setModalVisible ] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    return (
        <View style={styles.editUserContainer}>
            <GreetUser />
            <Button
                label='Change my username'
                buttonStyle={{flex: 1, backgroundColor: 'black'}} labelStyle={styles.buttonText}
                onPress={toggleModal} />
            <EditName modalVisible={modalVisible} toggleModal={toggleModal} />
        </View>
    );
  };

  export default EditUser;