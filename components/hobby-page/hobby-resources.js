import { View, Text } from 'react-native';

import Hyperlink from '../common/hyperlink';
import { styles } from './hobby-page-styles';

const HobbyResources = ({ hyperlinks }) => (
    <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>
            External Resources
        </Text>
        {hyperlinks.map((link) => (
            <View key={link.index}>
                <Hyperlink 
                    linkStyle={[styles.contentText, {fontStyle: 'italic'}]}
                    url={link.url}>
                    {link.title}
                </Hyperlink>
            </View>
        ))}
    </View>
);

export default HobbyResources;