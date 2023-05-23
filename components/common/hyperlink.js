import { useCallback } from 'react';
import { Alert, Linking, Pressable, Text } from 'react-native';

// pass url, children, linkStyle props for customization
const Hyperlink = ( props ) => {
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
            <Text style={props.linkStyle}>
                {props.children}
            </Text>
        </Pressable>
    );
}

export default Hyperlink;