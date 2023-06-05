import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';

//pop-up modal to explain difficulty rating system
const RatingInfo = ({ modalVisible, setModalVisible }) => (
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

export default RatingInfo;