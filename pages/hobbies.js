import { View, StyleSheet } from 'react-native';
import * as Crypto from 'expo-crypto';

import Hobby from '../components/hobby/hobby';

const coding_image = require('../assets/coding-button.jpg');
const volleyball_image = require('../assets/volleyball-button.jpg');
const writing_image = require('../assets/writing-button.jpg');

const Hobbies = () => {

    const hobbies = [{
        id: Crypto.randomUUID(),
        name: "Coding", 
        image: coding_image,
        saved: false
    },{
        id: Crypto.randomUUID(),
        name: "Volleyball", 
        image: volleyball_image,
        saved: false
    },{
        id: Crypto.randomUUID(),
        name: "Writing", 
        image: writing_image,
        saved: false
    }]
    
    return(
        <View style={styles.container}> 
            { hobbies.map((hobby) => {
                return(
                    <Hobby 
                        key={hobby.key}
                        hobby={hobby.name} 
                        image={hobby.image}>{hobby.name}
                    </Hobby>
                )}           
            )}
        </View>
    );
}

import { colors } from '../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: colors.white
    }
});

export default Hobbies;