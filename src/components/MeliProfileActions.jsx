
export const MeliProfileActions = ({ handleUpdateProfile, handleLogout }) => {
    
    return (
        <>
            <button
                className='btn update-btn ms-2'
                onClick={handleUpdateProfile}
            >
                Update Profile
            </button>
            <button
                className='btn logout-btn ms-2'
                onClick={handleLogout}
            >
                Log-out
            </button>
        </>
    )
}
