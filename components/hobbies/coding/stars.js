import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const star = () => (
    <View>
        <Ionicons name='star' size={24} color='blue' />
    </View>
);

export const emptyStar = () => (
    <View>
        <Ionicons name='star-outline' size={24} color='blue' />
    </View>
);