import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState([]);
    const findUser = async () => {
        const result = await AsyncStorage.getItem('user');
        if (result != null) {
            setUser(JSON.parse(result));
        }
    }
    useEffect(() => { findUser(); }, []);
    return(
        <UserContext.Provider value={{ user, setUser, findUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext)

export default UserProvider;