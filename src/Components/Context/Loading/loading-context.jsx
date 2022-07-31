import { createContext, useState } from 'react';
export const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
    let [loading, setLoading] = useState("https://i.pinimg.com/originals/ac/40/2f/ac402f57b35961d66cfbee27472c65a3.gif");
    return (
        <LoadingContext.Provider value={{loading, setLoading} }>
            {children}
        </LoadingContext.Provider>
    )
};