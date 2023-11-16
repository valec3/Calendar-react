import heroLogin from '../assets/hero-login.png'
import {Link,useNavigate}  from 'react-router-dom'
import { loginUser,getUserData } from '../services/api'
import { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

const Login = () => {
    const {setUserInfo} = useContext(GlobalContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log('Formulario enviado', user)
        
        const login = async () => {
            const dataUserApi = await loginUser(user)
            console.log(dataUserApi)
            const dataUser = await getUserData(dataUserApi.token)
            setTimeout(() => {
                setUser({
                    email: '',
                    password: ''
                })
            }, 2000)
            if(dataUserApi.user) {
                setUserInfo(dataUser)
                localStorage.setItem('token', dataUserApi.token)
                navigate('/calendar')
            }
        }
        login()

    }
    return (
        <div className="flex h-screen gap-0">
            <div className="bg-slate-800 w-full md:max-w-[700px] h-full flex flex-col justify-center py-6 px-10 text-white">
                <form className='max-md:w-full md:max-w[600px] md:px-6 flex flex-col gap-10' onSubmit={handleSubmitForm}>
                    <div>
                        <h2 className="text-red-400 font-bold text-4xl">Iniciar Sesión</h2>
                    </div>
                    <div className="text-white font-semibold flex flex-col gap-4">
                        <p>Correo:</p>
                        <div className="flex gap-2 p-2 bg-slate-50 rounded-sm items-center shadow-md">
                            <img src='' alt="G" />
                            <input 
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                type="email" 
                                required
                                placeholder="Ingresa tu correo electrónico"
                                className="px-2 rounded-sm bg-transparent outline-none text-black truncate w-full"
                            />
                        </div>
                    </div>
                    <div className="text-white font-semibold flex flex-col gap-4">
                        <p>Contraseña:</p>
                        <div className="flex gap-2 p-2 bg-slate-50 rounded-sm items-center shadow-md">
                            <img src='' alt="G" />
                            <input 
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                type="password" 
                                required
                                placeholder="Ingresa tu contraseña"
                                className="px-2 rounded-sm bg-transparent outline-none text-black w-full"
                            />
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <button className="bg-red-500 hover:bg-red-600 rounded-md text-white text-xl font-semibold py-2 px-4">
                            Iniciar sesión
                        </button>
                    </div>
                </form>
                <div className='mt-4'>
                    <p>
                        ¿No tienes una cuenta? <Link className="font-bold text-red-400" to="/register">Registrarse</Link>
                    </p>
                </div>
            </div>
            <div className="hidden md:flex flex-1 bg-red-300 w-full justify-center items-center">
                <img src={heroLogin} alt="G" className='max-h-[800px] object-cover' />
            </div>
        </div>
    )
}

export default Login