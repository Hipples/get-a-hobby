import { View } from 'react-native';

import Hyperlink from '../common/hyperlink';
import { styles } from './hobby-page-styles';

const HobbyResources = ({ hyperlinks }) => (
    <View style={styles.resourcesContainer}>
        {hyperlinks.map((link) => (
            <View key={link.index}>
                <Hyperlink 
                    linkStyle={styles.resourceLinks}
                    url={link.url}>
                    {link.title}{'\n'}
                </Hyperlink>
            </View>
        ))}
    </View>
);

export default HobbyResources;