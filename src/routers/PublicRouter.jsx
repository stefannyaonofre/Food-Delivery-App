import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({isAutenticated}) => {
  
  return (
    <div>
        {
           isAutenticated === 'authenticated' ? <Navigate to='/home'/> : <Outlet/> 
        }
    </div>
  )
}

export default PublicRouter