import { Pressable, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './hobbies-styles';

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

export default Hobby;