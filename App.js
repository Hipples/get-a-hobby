import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Hobbies from './pages/hobbies';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';
import Writing from './pages/hobbies/writing';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HobbyStack = createNativeStackNavigator();

const Root = () => (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Explore Hobbies' component={HobbyPages} />
    </Tab.Navigator>
);

const HobbyPages = () => (
    <HobbyStack.Navigator initialRouteName='Hobbies'>
        <HobbyStack.Screen name="Hobbies" component={Hobbies} />
        <HobbyStack.Screen name="Coding" component={Coding} />
        <HobbyStack.Screen name="Volleyball" component={Volleyball} />
        <HobbyStack.Screen name="Writing" component={Writing} />
    </HobbyStack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
                name="Welcome" 
                component={Welcome}
                options={{headerShown: false}} />
            <Stack.Screen
                name="Root"
                component={Root}
                options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;