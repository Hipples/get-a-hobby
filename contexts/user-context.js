import { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    [ user, setUser ] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    );
}

export default UserProvider;