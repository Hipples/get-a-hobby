import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Hobbies from './pages/hobbies';
import Favorites from './pages/favorites';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';
import Writing from './pages/hobbies/writing';

const WelcomeStack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();
const HobbyPages = createMaterialTopTabNavigator();

const HobbiesNav = () => (
    <HobbyPages.Navigator 
        initialRouteName='Hobbies'
        initialLayout={{ width: Dimensions.get('window').width }}
        screenOptions={{ tabBarShowLabel: false }} >
        <HobbyPages.Screen name="Hobbies" component={Hobbies} />
        <HobbyPages.Screen name="Coding" component={Coding} />
        <HobbyPages.Screen name="Volleyball" component={Volleyball} />
        <HobbyPages.Screen name="Writing" component={Writing} />
    </HobbyPages.Navigator>
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
            }, headerShown: false }
        )} >
        <HomeTabs.Screen name='Home' component={Home} />
        <HomeTabs.Screen name='Explore Hobbies' component={HobbiesNav}
            listeners={({ navigation }) => ({
                tabPress: (e) => {
                    e.preventDefault();
                    navigation.navigate("Explore Hobbies", {screen: "Hobbies"}
                )}
            })} />
        <HomeTabs.Screen name="Favorites" component={Favorites} />
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