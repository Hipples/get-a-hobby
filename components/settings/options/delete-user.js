import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import Button from "../../common/button";

import { useUserContext } from "../../../contexts/user-context"
import { styles } from '../settings-styles';

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
            buttonStyle={[styles.option, styles.deleteUser]} labelStyle={styles.optionText}
            onPress={() => deleteUser()} />
    );
}

export default DeleteUser;