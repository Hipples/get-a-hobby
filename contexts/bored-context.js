import { createContext, useContext, useState } from "react";

export const BoredContext = createContext();
export const LoadingContext = createContext();

export const useBoredContext = () => useContext(BoredContext);
export const useLoadingContext = () => useContext(LoadingContext);

const BoredProvider = ({ children }) => {
    [ activity, setActivity ] = useState(null);
    [ loading, setLoading ] = useState(true);

    return (
        <BoredContext.Provider value={{activity, setActivity}}>
            <LoadingContext.Provider value={{loading, setLoading}}>
                { children }
            </LoadingContext.Provider>
        </BoredContext.Provider>
    );
}

export default BoredProvider;