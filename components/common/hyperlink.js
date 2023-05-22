import { useCallback } from 'react';
import { Alert, Linking, Pressable, Text, StyleSheet } from 'react-native';

// tested with 'https://google.com'
// pass url, children, linkStyle props for customization
const AddLink = ( props ) => {
    const handlePress = useCallback(async () => {
        // checking if link is supported
        const supported = await Linking.canOpenURL(props.url);
        // if supported open, else alert user that link is broken
        if (supported) {
            await Linking.openURL(props.url);
        } else {
            Alert.alert(`Cannot open the URL: ${props.url}`);
        }
    }, [props.url]);
    // return pressable text for hyperlinks
    return (
        <Pressable 
            onPress={handlePress}>
            <Text style={[
                styles.link, 
                props.linkStyle]}>
                {props.children}
            </Text>
        </Pressable>
    );
}

// passing to linkStyle will override any default styles
const styles = StyleSheet.create({
    link: {
        color: 'white',
        fontSize: 20
    }
});

export default AddLink;