import { createContext, useContext, useState } from "react";

export const BoredContext = createContext();
export const useBoredContext = () => useContext(BoredContext);

const BoredProvider = ({ children }) => {
    [ activity, setActivity ] = useState(null);

    return (
        <BoredContext.Provider value={{activity, setActivity}}>
            { children }
        </BoredContext.Provider>
    );
}

export default BoredProvider;