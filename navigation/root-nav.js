import { createDrawerNavigator } from "@react-navigation/drawer";

import AboutUs from '../pages/about-us';
import Settings from '../components/settings/settings';

import HomeTabsNav from "./home-tabs-nav";
import HeaderBackground from "./header-background";
import { colors } from "../constants/theme";

const Drawer = createDrawerNavigator();

// top-left drawer navigator
const RootNav = () => (
    <Drawer.Navigator
        screenOptions={{
            headerBackground: () => (
                <HeaderBackground />
            ),
            headerTintColor: colors.white
        }}>
        <Drawer.Screen name="GetAHobby!" component={HomeTabsNav} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
);

export default RootNav;