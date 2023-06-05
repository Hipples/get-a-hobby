import { ActivityIndicator, View } from "react-native";

const SplashScreen = () => (   
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' />
    </View>
);

export default SplashScreen;