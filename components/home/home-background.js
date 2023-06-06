import { useState } from "react";
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useBoredContext } from "../../contexts/bored-context";


import { styles } from './home-styles';
import { colors } from "../../constants/theme";

const HomeBackground = ({ children }) => {
    const [ data, setData ] = useState();
    const { setActivity } = useBoredContext();

    const url = 'http://www.boredapi.com/api/activity/';

    const setRandomActivity = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.activity)
        } catch (error) {
            console.error(error);
        } finally {
            setActivity(data);
        }
    }    

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