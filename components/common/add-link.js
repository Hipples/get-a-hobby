import { useCallback } from 'react';
import { Alert, Linking, Pressable, Text, StyleSheet } from 'react-native';

const AddLink = ( props ) => {
    const handlePress = useCallback(async () => {
        //checking if link is supported
        const supported = await Linking.canOpenURL(props.url);

        if (supported) {
            await Linking.openURL(props.url);
        } else {
            Alert.alert(`Cannot open the URL: ${props.url}`);
        }
    }, [props.url]);

    return (
        <Pressable onPress={handlePress}>
            <Text style={[styles.link, props.linkStyle]}>{props.children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    link: {color: 'white'}
});

export default AddLink;