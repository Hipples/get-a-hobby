import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Hobbies from "../pages/hobbies";
import Coding from "../pages/hobbies/coding";
import Volleyball from "../pages/hobbies/volleyball";
import Writing from "../pages/hobbies/writing";
import Lego from "../pages/hobbies/lego";

const HobbyStack = createNativeStackNavigator();

const HobbiesNav = () => (
    <HobbyStack.Navigator initialRouteName='Hobbies' 
        screenOptions={{ headerShown: false }}>
        {/* list of hobbies */}
        <HobbyStack.Screen name="Hobbies" component={Hobbies} />
        {/* individual hobby pages */}
        <HobbyStack.Screen name="Coding" component={Coding} />
        <HobbyStack.Screen name="Volleyball" component={Volleyball} />
        <HobbyStack.Screen name="Writing" component={Writing} />
        <HobbyStack.Screen name="Lego" component={Lego} />
    </HobbyStack.Navigator>
);

export default HobbiesNav;