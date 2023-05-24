import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import Welcome from './pages/welcome';
import Home from './pages/home';
import Hobbies from './pages/hobbies';
import Coding from './pages/hobbies/coding';
import Volleyball from './pages/hobbies/volleyball';
import Writing from './pages/hobbies/writing';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ExploreStack = createNativeStackNavigator();

export const ExploreHobbies = () => (
    <ExploreStack.Navigator id="Hobbies" initialRouteName='Hobbies'>
        {/* list of hobbies */}
        <ExploreStack.Screen name="Hobbies" component={Hobbies} />
        {/* individual hobby pages */}
        <ExploreStack.Screen name="Coding" component={Coding} />
        <ExploreStack.Screen name="Volleyball" component={Volleyball} />
        <ExploreStack.Screen name="Writing" component={Writing} />
    </ExploreStack.Navigator>
);

const Root = () => (
    <Tab.Navigator
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
        )}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Explore Hobbies' component={ExploreHobbies}
            listeners = {({ navigation }) => ({ tabPress: () => {    
                navigation.dispatch(CommonActions.navigate({name: 'Hobbies'}))}})} />
    </Tab.Navigator>
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