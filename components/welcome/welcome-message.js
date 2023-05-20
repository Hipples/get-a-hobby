import { View, Text } from 'react-native';

import { styles } from './welcome-styles';

const WelcomeMessage = () => (
    <View style={styles.messageContainer}>
        <Text style={styles.message}>
            <Text style={styles.heading}>
                Welcome to
                <Text style={styles.title}>
                {"\n"}GetAHobby!{"\n"}
                </Text>
            </Text>
            {"\n\n"}Whether you're looking to relax, get creative,
            or learn something new, we've got you covered. 
            {"\n\n"}
            <Text style={{fontStyle: 'normal'}}>
                Get started finding the hobby for you!
            </Text>
        </Text>
    </View>
);

export default WelcomeMessage;