import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Feed = () => {
    const {isAuth} = useContext(AuthContext)
    
    if(isAuth){
        return (
            <div>Feed</div>
          )
    }
    else{
       return <Navigate to="/login" />
    }
   
  
}

export default Feed