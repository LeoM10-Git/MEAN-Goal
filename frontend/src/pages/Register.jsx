import {useState, useEffect} from 'react'
import { FaUser } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {

    
     
const [formData, setFormData] = useState({
     name: '',
     email: '',
     password: '',
     password2: '',
})

const { name, email, password, password2 } = formData

const navigate = useNavigate()
const dispatch = useDispatch()
const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

useEffect(() =>{
     if (isError){
          toast.error(message)
     }

     if(isSuccess || user){
          navigate('/')
     }

     dispatch(reset())


}, [user, isError, isSuccess, message, navigate, dispatch])


const onChange = (e) => {
     setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
     }))
}


const onSubmit = (e) => {
     e.preventDefault()

     if (password !== password2) {
          toast.error('Password does not match')
     }else {
          const userData = {
               name,
               email,
               password
          }

          dispatch (register(userData))
     }
}

if (isLoading) {
     return <Spinner />
}

  return (
    <>
    <section className="heading">
         <h1>
           <FaUser /> Register 
         </h1>
         <p>Please create a new account</p>
     </section>

     <section className="from">
          <form onSubmit={onSubmit}>
               <div className="form-group">
                    <input 
                         type="text" 
                         className="form-control" 
                         id="name" 
                         placeholder="Please enter your name" 
                         name="name" 
                         value={name} 
                         onChange={onChange}/>
               </div>
               <div className="form-group">
                    <input 
                         type="text" 
                         className="form-control" 
                         id="email" 
                         placeholder="Please enter your email" 
                         name="email" 
                         value={email} 
                         onChange={onChange}/>
               </div>
               <div className="form-group">
                    <input 
                         type="text" 
                         className="form-control" 
                         id="password" 
                         placeholder="Please enter your password" 
                         name="password" 
                         value={password}
                         onChange={onChange}/>
               </div>
               <div className="form-group">
                    <input 
                         type="text" 
                         className="form-control" 
                         id="name2" 
                         placeholder="Confirm password" 
                         name="password2" 
                         value={password2} 
                         onChange={onChange}/>
               </div>
          <div className="form-group">
               <button type="submit" className="btn btn-block">Submit</button>
          </div>
          </form>
     </section>
     </>
  )
}

export default Register