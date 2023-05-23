import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../pages/home";
import Hobbies from "../../pages/hobbies";

Tab = createBottomTabNavigator();

const HomeTabs = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore Hobbies" component={Hobbies} />
    </Tab.Navigator>
);

export default HomeTabs;