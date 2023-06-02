import React, { useEffect, useState } from 'react';
import { Dimensions, View, Button, Modal, Text, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width

const EditName = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [savedName, saveName] = useState("");  
  const { getItem, setItem } = useAsyncStorage('@name');

  const updateName = async (name) => {
    if ( name.length === 0 ) {
        alert("Please enter at least one character!")
    }
    try {
        await setItem(name);
        saveName(name); 
    } catch (error) { console.log(error) }
  }

  const getName = async () => {
    try {
        const newName = await getItem()
        saveName(newName)
        console.log(savedName)
    } catch (error) { console.log(error) }
  }

  useEffect(() => { getName() }, [])

  const handleChangeName = () =>{
    updateName(text);
    console.log(savedName)
    setText("");
    toggleModal();
  }

  return (
    <View style={styles.container}>
        <Text>Hello {savedName}!{'\n\n'}Would you like to change your name?</Text>
      <Button title="Yes, please" onPress={toggleModal} />
      <Modal
        visible={modalVisible}
        animationType='slide'
        onRequestClose={toggleModal}
        transparent={true}>
            <Pressable style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => {Keyboard.dismiss(); toggleModal();}}>
                <View style={styles.modalContainer}>
                    <Text label="Name" style={styles.modalText}>What should we call you?</Text>
                    <TextInput value={text} onChangeText={(name) => setText(name)}
                        style={{flexBasis: 100, fontSize: 50, padding: 10, width: screenWidth-50,
                        backgroundColor: 'green'}} />
                    <View style={{flexDirection: 'row', width: screenWidth-50,
                        backgroundColor: 'gray', justifyContent: 'space-between'}}>
                    <Button title="Change name" onPress={handleChangeName}/>
                    <Button title="Nevermind" onPress={toggleModal} />
                    </View>
                </View>
            </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'gray',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  modalContainer: {
    flexBasis: 500,
    width: screenWidth-20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },
});

export default EditName;