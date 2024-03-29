import {useEffect, useState} from 'react';

export const useAuth = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gigya.accounts.getAccountInfo({
            callback: function (res) {
                if (res.errorCode === 0) {
                    setIsLogged(true);
                    res.profile.firstName = decodeURIComponent(encodeURIComponent(res.profile.firstName));
                    setUserProfile(res.profile);
                    setLoading(false);
                } else {
                    setIsLogged(false);
                    setLoading(false);
                }
            }
        });
    }, []);
    
    const login = (response) => {
        setIsLogged(true);
        response.profile.firstName = decodeURIComponent(encodeURIComponent(response.profile.firstName));
        setUserProfile(response.profile);
    };

    const logout = () => {
        gigya.accounts.logout({
            callback: function (res) {
                if (res.errorCode === 0) {
                    setIsLogged(false);
                    setUserProfile(null);
                } else {
                    console.error("Error al deslogear al usuario:", res);
                }
            }
        });
    }

    return { isLogged, userProfile, loading, login, logout };
}
