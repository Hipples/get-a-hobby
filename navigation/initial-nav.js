import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { useUserContext } from "../contexts/user-context";

import SplashScreen from "../pages/splashscreen";
import Welcome from '../pages/welcome';
import CreateUser from "../pages/create-user";
import RootNav from './root-nav';

const WelcomeStack = createNativeStackNavigator();

// a splashscreen displays while checking for a value in '@user' in async storage,
// returning null progresses to the welcome screen,
// the user can press Get Started! to store their name in '@user',
// otherwise, a stored user will be sent straight to the home screen
const InitialNav = () => {
    const [ loading, setLoading ] = useState(true);
    const { user, setUser } = useUserContext();
    const { getItem } = useAsyncStorage('@user');

    const checkForUser = async () => {
        try {        
            const name = await getItem();
            if (name !== null) {
                setUser(name)
                setLoading(false)
            }
        } catch (error) { console.log(error) 
        } finally { setLoading(false) }
    } 

    useEffect(() => { checkForUser(); }, []);

    if ( loading ) { return(<SplashScreen />) }
    
    console.log(`User data retrieved for: ${user}`)

    return (
        <NavigationContainer>
            <WelcomeStack.Navigator screenOptions={{ headerShown: false }}>
                { (user === null) ? (
                    <>
                    <WelcomeStack.Screen name="Welcome" component={Welcome} />
                    <WelcomeStack.Group screenOptions={{ presentation: 'containedTransparentModal'}}>
                        <WelcomeStack.Screen name="Create User" component={CreateUser} />
                    </WelcomeStack.Group>
                    </>
                ) : (                
                    <WelcomeStack.Screen name="Root" component={RootNav} />
                )}
            </WelcomeStack.Navigator>
        </NavigationContainer>
    );
}

export default InitialNav;