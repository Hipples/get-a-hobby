import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './pages/welcome';
import Home from './pages/home';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen 
                    name="Welcome" 
                    component={Welcome}
                    options={{headerShown: false}} />
                <Stack.Screen 
                    name="Home" 
                    component={Home} />
                <Stack.Screen
                    name="Coding"
                    component={Coding} />
                <Stack.Screen
                    name="Volleyball"
                    component={Volleyball} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;