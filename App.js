import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './pages/welcome';
import RootNav from './navigation/root-nav';
import LoginProvider, { useLogin } from './contexts/login-context';
import StartupNavigation from './navigation/startup-navigation';

const WelcomeStack = createNativeStackNavigator();

// navigation wrapper for entire app 
const App = () => {
  const { isLoggedIn } = useLogin();

  return (
    <LoginProvider>
      <NavigationContainer>
          <WelcomeStack.Navigator 
              screenOptions={{ headerShown: false }}
              initialRouteName='startup'>
                <WelcomeStack.Screen name='startup' component={StartupNavigation} />
                {isLoggedIn ? (
                  <WelcomeStack.Screen name="Root" component={RootNav} />
                ) : (
                  <WelcomeStack.Screen name="Welcome" component={Welcome} />
                )}
          </WelcomeStack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
}
export default App;