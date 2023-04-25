import { Text, View, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo-splash-screen';
import { useFonts, ComicNeue_300Light } from '@expo-google-fonts/comic-neue';

//keep splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GetAHobby</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {},
    title: {
        //fontFamily: "ComicNeue_300Light",
        fontSize: 50
    }
});

export default Title;