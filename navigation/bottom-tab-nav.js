import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import Home from '../pages/home';

import HobbiesNav from '../navigation/hobbies-nav';

import { colors, highlights, shadows, sizes } from '../constants/theme';

const HomeTabs = createBottomTabNavigator();

// there is a lot of styling going on here. . .
const BottomTabNav = () => (
    <HomeTabs.Navigator
        initialRouteName='Home'
        screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: shadows.tertiary,
                height: sizes.large*3,
                paddingTop: sizes.xsmall,
                paddingBottom: sizes.xsmall
            },
            tabBarLabelStyle: { color: colors.white, fontSize: sizes.small },
            tabBarBackground: () => (
                <LinearGradient 
                    colors={[ shadows.tertiary, highlights.tertiary ]}
                    start={[1, 0]} end={[1, 1]}
                    style={{ flex: 1 }}>
                    <LinearGradient
                        colors={[colors.quaternary, highlights.primary, colors.secondary, highlights.tertiary]}
                        start={[0, 1]} end={[1, 1]}
                        style={{ height: 3 }}
                    />
                </LinearGradient>
              ),
            
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home' : 'arrow-left';
                } else if (route.name === 'Explore Hobbies') {
                    iconName = focused
                        ? 'book-open' : 'book';
                }
                return <FontAwesome5 name={iconName} size={sizes.large} color={colors.white} />
            }}
        )} >
        <HomeTabs.Screen name='Home' component={Home} />
        <HomeTabs.Screen name='Explore Hobbies' component={HobbiesNav} />
    </HomeTabs.Navigator>
);

export default BottomTabNav;