import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Dashboard() {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
    useEffect(() =>{
        if (isError){
              toast.error(message)
        }
    
        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    if (!user) { 
      navigate('/login')
 }
  return (
    <div>Dashboard</div>

  )
}

export default Dashboard