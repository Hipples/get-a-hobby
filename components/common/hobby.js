import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Hobby = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.hobbyContainer}>
            <Pressable onPress={ () => navigation.navigate(props.hobby) }>
                <Text>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default Hobby;

const styles = StyleSheet.create({
    hobbyContainer: {}
});