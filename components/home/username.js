import { Text, View } from 'react-native';
import { useUserContext } from '../../contexts/user-context';

import { styles } from './home-styles';

const Username = () => {
    const { user } = useUserContext();

    return(
        <View style={styles.usernameContainer}>
            <Text style={styles.username}>{ user }!</Text>
        </View>
    );
}

export default Username;