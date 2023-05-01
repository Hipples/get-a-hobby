import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './pages/welcome';
import Home from './pages/home';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;