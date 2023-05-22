import { View, StyleSheet, Pressable, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home';
import Hobbies from './hobbies';

const Tab = createBottomTabNavigator();

const Root = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={Home} />
        <Tab.Screen
            name="Explore"
            component={Hobbies} />
        {/* <Tab.Screen
            name="Journal"
             /> */}
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#b1b5b9"
    }
});

export default Root;