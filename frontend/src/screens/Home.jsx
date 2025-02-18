import React, {useContext} from 'react'
import { UserContext } from '../context/user.context'
import { Link } from 'react-router-dom'

const Home = () => {
    const { user } = useContext(UserContext)
  return (
    <>
      { (user) ? 
        <div>{JSON.stringify(user)}</div> : 
        <>
        <Link to="/register" className="text-blue-500 block hover:underline">Register</Link>
        <Link to="/login" className="text-blue-500 block hover:underline">Login</Link>
        </> 
      }
    </>
  )
}

export default Home