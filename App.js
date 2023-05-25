import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Hobbies from './pages/hobbies';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';
import Writing from './pages/hobbies/writing';

const WelcomeStack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();
const HobbyStack = createNativeStackNavigator();

export const HobbiesNav = () => (
    <HobbyStack.Navigator initialRouteName='Hobbies' 
        screenOptions={{ headerShown: false }}>
        {/* list of hobbies */}
        <HobbyStack.Screen name="Hobbies" component={Hobbies} />
        {/* individual hobby pages */}
        <HobbyStack.Screen name="Coding" component={Coding} />
        <HobbyStack.Screen name="Volleyball" component={Volleyball} />
        <HobbyStack.Screen name="Writing" component={Writing} />
    </HobbyStack.Navigator>
);

// the first section defines the icons for the tab bar
const RootNav = () => (
    <HomeTabs.Navigator
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
            }}
        )} >
        <HomeTabs.Screen name='Home' component={Home}
            options={{headerShown: false}} />
        <HomeTabs.Screen name='Explore Hobbies' component={HobbiesNav}
            screenOptions={{ unmountOnBlur: true }}
            options={{headerShown: false}} />
    </HomeTabs.Navigator>
);

const App = () => (
    <NavigationContainer>
        <WelcomeStack.Navigator initialRouteName="Welcome" >
            <WelcomeStack.Screen 
                name="Welcome" 
                component={Welcome}
                options={{headerShown: false}} />
            <WelcomeStack.Screen
                name="Root"
                component={RootNav}
                options={{headerShown: false}} />
        </WelcomeStack.Navigator>
    </NavigationContainer>
);

export default App;