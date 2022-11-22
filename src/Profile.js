import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const {isLoading, isAuthenticated, user} = useAuth0();

    if (isLoading) { 
        return <div>Loading ... </div>
    }
    return (
        isAuthenticated && (<div>
            <img src= {user.profile.image}></img>
        </div>
    ))
}

export default Profile;