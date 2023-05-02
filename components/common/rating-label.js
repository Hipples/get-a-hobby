import { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

import RatingsInfoModal from './ratings-info-modal';

const infoIcon = require('../../assets/info-icon.png');

const RatingLabel = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (        
        <View style={styles.labelContainer}>
            <RatingsInfoModal 
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

const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#EFEFEF'
    },
    icon: {
        height: 20
    }
});

export default RatingLabel;