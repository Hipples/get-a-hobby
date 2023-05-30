import { Pressable, Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Hobby = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable 
            style={styles.buttonContainer}
            onPress={ () => navigation.navigate(props.hobby) }>
            <ImageBackground 
                source={props.image} 
                style={styles.hobbyContainer}>
                <Text style={styles.hobbyText}>{props.children}</Text>
            </ImageBackground>
        </Pressable>
    );
}

import { colors, shadows, sizes } from '../../constants/theme';

const styles = StyleSheet.create({
    buttonContainer: {
        flexBasis: 130,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    hobbyContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        opacity: 1
    },
    hobbyText: {
        fontSize: sizes.xlarge*2,
        fontWeight: '500',
        color: colors.white,
        opacity: 1,
        textShadowRadius: 2,
        textShadowOffset: { width: 3, height: 3 },
        textShadowColor: shadows.tertiary
    }
});

export default Hobby;