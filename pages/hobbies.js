import { View, StyleSheet } from 'react-native';

import Hobby from '../components/hobby/hobby';

const coding_image = require('../assets/coding-button.jpg');
const volleyball_image = require('../assets/volleyball-button.jpg');
const writing_image = require('../assets/writing-button.jpg');
const everything_is_awesome = require('../assets/lego_icon.png');

const Hobbies = () => (
    <View style={styles.container}>
        <Hobby hobby='Coding' image={coding_image}>Coding</Hobby>
        <Hobby hobby='Volleyball' image={volleyball_image}>Volleyball</Hobby>
        <Hobby hobby='Writing' image={writing_image}>Writing</Hobby>
        <Hobby hobby='Lego Building' image={everything_is_awesome}>Lego Building</Hobby>
    </View>
);

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