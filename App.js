import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Hobbies from './pages/hobbies';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';
import Writing from './pages/hobbies/writing';
import Legos from './pages/hobbies/legos';
import AboutUs from './pages/about-us';

import { colors, highlights, shadows, sizes } from './constants/theme';
import Profile from './profile';

const WelcomeStack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();
const HobbyStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// navigation for hobby pages
const HobbiesNav = () => (
    <HobbyStack.Navigator initialRouteName='Hobbies' 
        screenOptions={{ headerShown: false }}>
        {/* list of hobbies */}
        <HobbyStack.Screen name="Hobbies" component={Hobbies} />
        {/* individual hobby pages */}
        <HobbyStack.Screen name="Coding" component={Coding} />
        <HobbyStack.Screen name="Volleyball" component={Volleyball} />
        <HobbyStack.Screen name="Writing" component={Writing} />
        <HobbyStack.Screen name="Legos" component={Legos} />
    </HobbyStack.Navigator>
);

// the first section defines the icons for the tab bar
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

// top drawer navigator
const RootNav = () => (
    <Drawer.Navigator
        screenOptions={{
            headerBackground: () => (
                <LinearGradient 
                    colors={[highlights.tertiary, shadows.tertiary]}
                    style={{flex: 1}}/>
            ),
            headerTintColor: colors.white
        }}>
        <Drawer.Screen name="GetAHobby!" component={BottomTabNav} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
);

// navigation wrapper for entire app 
const App = () => (
    <NavigationContainer>
        <WelcomeStack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }} >
            <WelcomeStack.Screen name="Welcome" component={Welcome} />
            <WelcomeStack.Screen name="Root" component={RootNav} />
        </WelcomeStack.Navigator>
    </NavigationContainer>
);

export default App;