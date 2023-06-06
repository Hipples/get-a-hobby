
import { useState } from 'react';
import { styles } from './settings-styles';
import { Button, Keyboard, Modal, Pressable, Text, TextInput, View } from 'react-native';

const EditUser = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState("");
  
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    return (
        <>
        <Button title="Open Modal" onPress={toggleModal} />
  
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={toggleModal}
          transparent={true}
          style={{ justifyContent: 'center'}}>
              <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                  <View style={styles.modalContainer}>
                      <Text style={styles.modalText}>What should we call you?</Text>
                      <TextInput value={text} onChangeText={(name) => setText(name)}
                          style={styles.editUser} />
                      <View style={styles.buttonsContainer}>
                        <Button title="Submit" onPress={() => updateUser()}/>
                        <Button title="Cancel" onPress={toggleModal} />
                      </View>
                  </View>
              </Pressable>
        </Modal>
        </>
    );
  };

  export default EditUser;