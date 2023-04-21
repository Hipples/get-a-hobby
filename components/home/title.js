import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, ComicNeue_300Light } from '@expo-google-fonts/comic-neue';

const Title = () => {
    let [fontsLoaded] = useFonts({ComicNeue_300Light});

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>GetAHobby</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    title: {
        fontFamily: "ComicNeue_300Light",
        fontSize: 50
    }
});

export default Title;