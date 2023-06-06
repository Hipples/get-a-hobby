import { useState } from 'react';
import { View } from 'react-native';

import GreetUser from './greet-user';
import EditName from './edit-name';
import Button from '../common/button';

import { styles } from './settings-styles';

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