import { useCallback, useContext, useMemo, useState } from "react";

import { MeliInputComponent } from "./components/MeliInputComponent";
import AppRouter from "./AppRouter";
import { AuthContext } from "./context/AuthContext";
import { MeliProfilePopup } from "./components/MeliProfilePopup";

import './styles.css';


export function MeliApp() {

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

    const authContext = useContext(AuthContext);

    const {isLogged, userProfile, loading, logout, isMobile} = useMemo(() => authContext, [authContext]);
    
    const handleProfilePopup= () => {
        setIsProfilePopupOpen(!isProfilePopupOpen);
    };

    const handleUpdateProfile = useCallback(() => {
        gigya.accounts.showScreenSet({ screenSet: 'prueba-ProfileUpdate' });
        setIsProfilePopupOpen(false);
    }, []);

    const handleLogout = () => {
        logout();
        setIsProfilePopupOpen(false); 
    };

    return (
        <>
            <MeliInputComponent 
                handleProfilePopup={handleProfilePopup}
                handleUpdateProfile={handleUpdateProfile}
                handleLogout={handleLogout}
                isLogged={isLogged}
                userProfile={userProfile}
                loading={loading}
                isMobile={isMobile}
            />
            
            <div className={`container ${isProfilePopupOpen ? 'profile-open' : ''}`}>
                <AppRouter />
            </div>

            
    
            {isProfilePopupOpen && (
                <MeliProfilePopup
                    handleUpdateProfile={handleUpdateProfile}
                    handleLogout={handleLogout}
                    setIsProfilePopupOpen={setIsProfilePopupOpen}
                />
            )}
            
        </>
    )
}
