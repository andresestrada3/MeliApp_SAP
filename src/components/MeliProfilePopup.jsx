import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MeliProfileActions } from './MeliProfileActions';

export const MeliProfilePopup = ({handleUpdateProfile, handleLogout, setIsProfilePopupOpen}) => {
    return (
            
        <div className="popup-overlay animate__animated animate__slideInLeft">
            <div className="profile-popup">
                
                <MeliProfileActions
                    handleUpdateProfile={handleUpdateProfile}
                    handleLogout={handleLogout}
                />

                <div 
                    className="close-icon"
                    onClick={() => setIsProfilePopupOpen(false)}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </div>
        
    )
}
