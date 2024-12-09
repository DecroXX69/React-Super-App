
import { useContext } from 'react';
import { AppContext } from './../context/AppContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {

    const {user,selectedGenres}= useContext(AppContext)

if(children.type.name==="Dashboard" || children.type.name==="CarouselPage" || children.type.name==="MoviePage" )
{
    
    return user && selectedGenres && selectedGenres.length>=3? children :!user? <Navigate to ="/register"/> : <Navigate to ="/genres"/>

}

else
return user? children : <Navigate to ="/register"/>
}
