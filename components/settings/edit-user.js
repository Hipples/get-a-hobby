import { useState } from 'react';
import { styles } from './settings-styles';
import { Button, Keyboard, Modal, Pressable, Text, TextInput, View } from 'react-native';
import { useUserContext } from '../../contexts/user-context';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const EditName = ({ modalVisible, toggleModal }) => {
    const [ value, setValue ] = useState("");
    const { setUser } = useUserContext();
    const { setItem } = useAsyncStorage('@user');
    
    const navigation = useNavigation();

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
                        style={styles.editUser}
                        value={value} 
                        onChangeText={(newName) => setValue(newName)}
                        placeholder="Enter name" />
                    <View style={styles.buttonsContainer}>
                      <Button title="Submit" onPress={() => handleSubmit()}/>
                      <Button title="Cancel" onPress={toggleModal} />
                    </View>
                </View>
            </Pressable>
        </Modal>
    )
}

const EditUser = () => {
    const [ modalVisible, setModalVisible ] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    return (
        <>
        <Button title="Open Modal" onPress={toggleModal} />
        <EditName modalVisible={modalVisible} toggleModal={toggleModal} />
        </>
    );
  };

  export default EditUser;