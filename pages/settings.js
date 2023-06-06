import { View } from 'react-native'; 

import DeleteUser from '../components/settings/delete-user';
import EditUser from '../components/settings/edit-user';

import { styles } from '../components/settings/settings-styles';

const Settings = () => (
  <View style={styles.container}>
    <EditUser />
    <DeleteUser />
  </View>
)

export default Settings;
