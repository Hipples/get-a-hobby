// more info on rating props can be found at the link below:
// https://github.com/Monte9/react-native-ratings
import { useState } from 'react'
import { View, Text, Image, Pressable, Modal, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const infoIcon = require('../../assets/info-icon.png')

const InfoModal = ({ modalVisible, setModalVisible }) => {

    return (
      <View>
        <Modal
          transparent={true}
          animationType='fade'
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
        </Modal>
      </View>
    );
}

const RatingLabel = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        
        <View style={styles.labelContainer}>
            <InfoModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
            <Text style={styles.label}>
                Difficulty Rating
            </Text>
            <Pressable
                onPress={() => setModalVisible(true)}>
                <Image 
                    source={infoIcon}
                    resizeMode='contain' 
                    style={styles.icon}/>
            </Pressable>
        </View>
    );
}

const DifficultyRating = ({ rating }) => (
    <View style={styles.container}>
        <RatingLabel />
        <Rating 
            tintColor="#555"  // background of stars container
            readonly={true}  // user cannot modify star display
            ratingCount={5}  // easy, novice, intermediate, advanced, expert
            startingValue={rating}  // sets number of filled stars to reflect rating
            style={styles.stars} />
    </View>
);

// can either be removed or updated if able to work across hobbies
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 2,
        marginHorizontal: 10,
        marginBottom: 2
    },
    stars: {
        paddingHorizontal: 10
    },
    labelContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        color: '#EFEFEF'
    },
    icon: {
        height: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2, 
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

});

export default DifficultyRating;