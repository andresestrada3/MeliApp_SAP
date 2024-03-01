import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MeliHeaderForm } from './MeliHeaderForm';
import { MeliProfileActions } from './MeliProfileActions';

export function MeliInputComponent({handleProfilePopup, isLogged, userProfile, loading, handleUpdateProfile, handleLogout, isMobile }) {
    
    const handleLogin = useCallback(() => {
        gigya.accounts.showScreenSet({ screenSet: 'Default-RegistrationLogin' });
    }, []);   

    const handleSubscribe = useCallback(() => {
        gigya.accounts.showScreenSet({ screenSet: 'prueba-LiteRegistration' });
    }, []); 

    return (
        <header className={`p-2 ${isMobile ? 'header_mobile' : ''}`}>

            <MeliHeaderForm/>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {isLogged && userProfile ? (
                        <div className='d-flex ps-2' style={{ alignItems: 'center' }}>
                            
                            <span 
                                className='logged_name me-3' 
                                style={{ 
                                    textDecoration: 'underline', 
                                    cursor: isMobile ? 'pointer' : 'default'
                                }}
                                onClick={isMobile ? handleProfilePopup : undefined}
                            >
                                <FontAwesomeIcon icon={faUser} className='me-2' />
                                <b>{userProfile.firstName}</b>
                            </span>

                            {!isMobile && (
                                <MeliProfileActions
                                    handleUpdateProfile={handleUpdateProfile}
                                    handleLogout={handleLogout}
                                />
                            )}
                        </div>
                    ) : (
                        <>
                            <button
                                className='btn login-btn ms-2'
                                onClick={handleLogin}
                            >
                                Log In
                            </button>

                            <button
                                className='btn subscribe-btn ms-2'
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </>
                    )}
                </>
            )}
        </header>
    );
}
