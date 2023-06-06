import DeleteUser from '../components/settings/delete-user';
import EditUser from '../components/settings/edit-user';
import GreetUser from '../components/settings/greet-user';

import { SettingsBackground, styles } from '../components/settings/settings-styles';

const Settings = () => (
  <SettingsBackground>
    <GreetUser />
    <EditUser />
    <DeleteUser />
  </SettingsBackground>
);

export default Settings; 
