import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useBoredContext, useLoadingContext } from "../../contexts/bored-context";

import { styles } from './home-styles';
import { colors } from "../../constants/theme";
import { useEffect } from "react";

const HomeBackground = ({ children }) => {
    const { setActivity } = useBoredContext();
    const { setLoading } = useLoadingContext();

    const url = 'http://www.boredapi.com/api/activity/';

    const setRandomActivity = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setActivity(json.activity)
        } catch (error) {
            console.error(error);
        } finally { setLoading(false) }
    }
    
    useEffect(() => { setRandomActivity() }, [])

    return(
        <LinearGradient
            colors={[ colors.white, colors.gray ]}
            locations={[.35, .9]}
            style={styles.container}>
            <Pressable 
                onPress={ () => setRandomActivity() } 
                style={{flex: 1}}>
                { children }        
            </Pressable>
        </LinearGradient>
    );
}

export default HomeBackground;