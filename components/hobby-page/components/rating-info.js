import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';

import { styles } from '../hobby-page-styles'

//pop-up modal to explain difficulty rating system
const RatingInfo = ({ modalVisible, setModalVisible }) => (
    <View>
        <Modal
            transparent={true}
            animationType='fade'
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)}} >
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Hobby Difficulty Ratings: {"\n\n"}
                    1 star: Easy {"\n"}
                    2 star: Novice {"\n"}
                    3 star: Intermediate {"\n"}
                    4 star: Advanced {"\n"}
                    5 star: Expert {"\n"}
                </Text>
                <Pressable
                    style={[styles.closeButton, styles.closeButtonPressed]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.closeButtonLabel}>Close</Text>
                </Pressable>
            </View>
        </Modal>
    </View>
);

export default RatingInfo;