import { View, Modal, Text } from 'react-native';

import Button from '../../common/button';
import { styles } from '../../settings/settings-styles';
import { Rating } from 'react-native-ratings';

const ratingInfo = [{
    stars: 1, difficulty: 'Easy'
},{
    stars: 2, difficulty: 'Novice'
},{
    stars: 3, difficulty: 'Intermediate'
},{
    stars: 4, difficulty: 'Advanced'
},{
    stars: 5, difficulty: 'Expert' }]

//pop-up modal to explain difficulty rating system
const RatingInfo = ({ modalVisible, setModalVisible }) => (
    <Modal
    visible={modalVisible}
    animationType="fade"
    onRequestClose={!modalVisible}
    transparent={true}>
        <View style={styles.popupContainer}>
            <View style={[styles.popup, styles.ratingInfo]}>
                <Text style={styles.ratingInfoHeader}>Rating Info</Text>
                { ratingInfo.map((rating) => (
                    <View 
                        key={rating.stars} 
                        style={styles.ratingItemContainer}>
                        <Text style={styles.ratingItemText}>{rating.difficulty}</Text>
                        <Rating
                            type='custom'
                            resize='contain'
                            readonly={true}
                            ratingCount={rating.stars}
                            startingValue={rating.stars}
                            style={styles.stars}
                            imageSize={25}
                            tintColor='white' />
                    </View>
                ))}
                <Button
                    label="Close"
                    buttonStyle={[styles.button, styles.cancel, {alignSelf: 'center', marginTop: 20}]}
                    labelStyle={styles.buttonText}
                    onPress={() => setModalVisible(false)} />
            </View>
        </View>
    </Modal>
);

export default RatingInfo;