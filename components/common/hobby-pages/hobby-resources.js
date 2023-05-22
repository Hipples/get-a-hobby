import { View } from 'react-native';

import AddLink from '../hyperlink';
import { styles } from './hobby-page-styles';

const HobbyResources = ({ hyperlinks }) => (
    <View style={styles.resourcesContainer}>
        {hyperlinks.map((link) => (
            <View key={link.index}>
                <AddLink url={link.url}>{link.title}{'\n'}</AddLink>
            </View>
        ))}
    </View>
);

export default HobbyResources;