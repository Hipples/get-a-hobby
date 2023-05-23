import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Hobby = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable onPress={ () => navigation.navigate(props.hobby) }>
                <Text>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default Hobby;