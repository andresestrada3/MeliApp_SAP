import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"
import { setupGigyaEventHandlers } from "../scripts/gigya";



export const AuthProvider = ({children}) => {

    const { isLogged, userProfile, loading, login, logout} = useAuth();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
      setupGigyaEventHandlers(login);
    }, [login]);

    return (
        <AuthContext.Provider value={{isLogged, userProfile, loading, logout, isMobile}}>
            {children}
        </AuthContext.Provider>
    )
}
