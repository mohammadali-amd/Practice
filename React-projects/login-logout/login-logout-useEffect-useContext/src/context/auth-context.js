import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLogedInInformation = localStorage.getItem('isLoggedIn')
        if (storedUserLogedInInformation === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContext;