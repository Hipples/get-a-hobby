import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserProvider from './contexts/user-context';
import Welcome from './pages/welcome';
import RootNav from './navigation/root-nav';

const WelcomeStack = createNativeStackNavigator();

// navigation wrapper for entire app 
const App = () => (
    <UserProvider>
        <NavigationContainer>
            <WelcomeStack.Navigator 
                initialRouteName="Welcome"
                screenOptions={{ headerShown: false }} >
                <WelcomeStack.Screen name="Welcome" component={Welcome} />
                <WelcomeStack.Screen name="Root" component={RootNav} />
            </WelcomeStack.Navigator>
        </NavigationContainer>
    </UserProvider>
);

export default App;