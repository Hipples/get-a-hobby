import { useState } from 'react';

import EditName from './edit-name';
import Button from '../common/button';

import { styles } from './settings-styles';

const EditUser = () => {
    const [ modalVisible, setModalVisible ] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    return (
        <>
        <Button
            label='Change Username'
            buttonStyle={{backgroundColor: 'black'}} labelStyle={styles.buttonText}
            onPress={toggleModal} />
        <EditName modalVisible={modalVisible} toggleModal={toggleModal} />
        </>
    );
  };

  export default EditUser;