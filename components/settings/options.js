import { View } from 'react-native';

import EditUser from "./options/edit-user";
import DeleteUser from "./options/delete-user";
import GoHome from './options/go-home';

import { styles } from './settings-styles'; 

const Options = () => (
    <View style={styles.optionsContainer}>
    <EditUser />
    <DeleteUser />
    <GoHome />
    </View>
);

export default Options;