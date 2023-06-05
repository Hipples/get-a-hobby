import { Pressable, View, Text } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { useUserContext } from "../../contexts/user-context"
import { styles } from './settings-styles';

const DeleteUser = () => {
    const { setUser } = useUserContext();
    const { removeItem } = useAsyncStorage('@user');

    const deleteUser = async () => {
        try {
            await removeItem();
            setUser(null);
        } catch (error) { console.error(error) }
    }

    return (
        <View style={styles.deleteUserButtonContainer}>
        <Pressable 
            onPress={() => deleteUser()}
            style={styles.deleteUserButton}>
            <Text style={styles.deleteUserButtonLabel}>Delete User</Text>
        </Pressable>
        </View>
    );
}

export default DeleteUser;