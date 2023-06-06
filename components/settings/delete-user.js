import { Pressable, View, Text } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { useUserContext } from "../../contexts/user-context"
import { styles } from './settings-styles';
import Button from "../common/button";

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
        <Button
            label='Delete User'
            buttonStyle={{flex:1, backgroundColor: 'black'}} labelStyle={styles.buttonText}
            onPress={() => deleteUser()} />
    );
}

export default DeleteUser;