import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import { Rating } from 'react-native-ratings';

const infoIcon = require('../../assets/info-icon.png');
//pop-up modal to explain difficulty rating system
const RatingsInfoModal = ({ modalVisible, setModalVisible }) => (
    <View>
        <Modal
            transparent={true}
            animationType='fade'
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)}} >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>
                    Hobby Difficulty Ratings: {"\n\n"}
                    1 star: Easy {"\n"}
                    2 star: Novice {"\n"}
                    3 star: Intermediate {"\n"}
                    4 star: Advanced {"\n"}
                    5 star: Expert {"\n"}
                </Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        </Modal>
    </View>
);

const RatingStars = () => { 
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View>        
            <View style={{flexDirection: 'row'}}>

                <RatingsInfoModal 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible} />

                <Text>
                    Difficulty Rating
                </Text>

                <Pressable
                    onPress={() => setModalVisible(true)}>
                    <Image 
                        source={infoIcon}
                        />
                </Pressable>
            </View>
        <View>
        <Rating 
            readonly={true}  // user cannot modify star display
            ratingCount={5}  // easy, novice, intermediate, advanced, expert
            startingValue={props.rating}  // sets number of filled stars to reflect rating
            style={props.starStyle} />
        </View>
    </View>
    );
}
    
//TODO
const styles = StyleSheet.create({
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
        textAlign: 'left',
    }
});