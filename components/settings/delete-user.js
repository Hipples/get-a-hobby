import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useUserContext } from "../../contexts/user-context"
import { Pressable, View, Text } from "react-native";

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
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable 
            onPress={() => deleteUser()}
            style={{borderWidth: 2, borderRadius: 20, height: 100, width: 200}}>
            <Text style={{fontSize: 20}}>Delete User</Text>
        </Pressable>
        </View>
    );
}

export default DeleteUser;