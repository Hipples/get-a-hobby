import { createDrawerNavigator } from "@react-navigation/drawer";

import AboutUs from '../pages/about-us';
import EditName from '../components/username/edit-name';

import BottomTabNav from "./bottom-tab-nav";
import HeaderBackground from "../components/navigation/header-background";
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
        <Drawer.Screen name="GetAHobby!" component={BottomTabNav} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Edit Name" component={EditName} />
    </Drawer.Navigator>
);

export default RootNav;