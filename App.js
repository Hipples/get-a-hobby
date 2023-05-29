import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Hobbies from './pages/hobbies';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';
import Writing from './pages/hobbies/writing';
import Legos from './pages/hobbies/legos';
import AboutUs from './pages/about-us';

const WelcomeStack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();
const HobbyStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RootNav = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Get A Hobby!" component={BottomTabNav} />
        <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
);

const HobbiesNav = () => (
    <HobbyStack.Navigator initialRouteName='Hobbies' 
        screenOptions={{ headerShown: false }}>
        {/* list of hobbies */}
        <HobbyStack.Screen name="Hobbies" component={Hobbies} />
        {/* individual hobby pages */}
        <HobbyStack.Screen name="Coding" component={Coding} />
        <HobbyStack.Screen name="Volleyball" component={Volleyball} />
        <HobbyStack.Screen name="Writing" component={Writing} />
        <HobbyStack.Screen name="Lego Building" component={Legos} />
    </HobbyStack.Navigator>
);

// the first section defines the icons for the tab bar
const BottomTabNav = () => (
    <HomeTabs.Navigator
        initialRouteName='Home'
        screenOptions={ ({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home' : 'arrow-left';
                } else if (route.name === 'Explore Hobbies') {
                    iconName = focused
                        ? 'book-open' : 'book';
                }
                return <FontAwesome5 name={iconName} size={24} color="black" />
            }}, { headerShown: false }
        )} >
        <HomeTabs.Screen name='Home' component={Home} />
        <HomeTabs.Screen name='Explore Hobbies' component={HobbiesNav} />
    </HomeTabs.Navigator>
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