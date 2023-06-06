import GreetUser from '../components/settings/greet-user';
import Options from '../components/settings/options';

import { SettingsBackground } from '../components/settings/settings-styles';

const Settings = () => (
  <SettingsBackground>
    <GreetUser />
    <Options />
  </SettingsBackground>
);

export default Settings;