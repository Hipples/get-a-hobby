import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { useUserContext } from "../contexts/user-context";

import SplashScreen from "../pages/splashscreen";
import Welcome from '../pages/welcome';
import CreateUser from "../components/settings/create-user";
import RootNav from './root-nav';

const WelcomeStack = createNativeStackNavigator();

const InitialNav = () => {
    const [ loading, setLoading ] = useState(true);
    const { user, setUser } = useUserContext();
    const { getItem } = useAsyncStorage('@user');

    const checkForUser = async () => {
        try {        
            const name = await getItem();
            if (name !== null) {
                setUser(name)
                console.log(`Initial user: ${user}`);
                setLoading(false)
            }
        } catch (error) { console.log(error) }
    }

    useEffect(() => { checkForUser() }, []);

    if ( loading ) { return(<SplashScreen />) }

    return (
        <NavigationContainer>
            <WelcomeStack.Navigator screenOptions={{ headerShown: false }}>
                { (user === null) ? (
                    <>
                    <WelcomeStack.Screen name="Welcome" component={Welcome} />
                    <WelcomeStack.Group screenOptions={{ presentation: 'containedTransparentModal'}}>
                        <WelcomeStack.Screen name="New User" component={CreateUser} />
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