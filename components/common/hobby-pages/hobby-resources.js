import { View } from 'react-native';

import Hyperlink from '../hyperlink';
import { styles } from './hobby-page-styles';

const HobbyResources = ({ hyperlinks }) => (
    <View style={styles.resourcesContainer}>
        {hyperlinks.map((link) => (
            <View key={link.index}>
                <Hyperlink url={link.url}>{link.title}{'\n'}</Hyperlink>
            </View>
        ))}
    </View>
);

export default HobbyResources;