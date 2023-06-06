import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import scrum from '../assets/scrum_board.svg'
import { Link, Outlet } from 'react-router-dom';
import { Auth } from '../AuthContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
//import line2  from '../assets/line2.svg'
import { decodeToken, isExpired } from "react-jwt";
import PomodoroTimer from '../components/PomodoroTimer';

export default function BackgroundPages() {
    const { token } = useContext(Auth)
    const [ hasToken, setHasToken ] = useState(false)
    const myDecodedToken = decodeToken(token)
    const [autenticando, setAutenticando] = useState(true)
    useEffect(() => {
        const teste = async function () {
            const returned = await axios.get('http://localhost:3001/auth', {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(returned.data)
            if (!(returned.status === 200 && returned.data.validToken)) { location.pathname = '/login' }
            else {setAutenticando(false)}
        }()
    }, [])
    return autenticando ? "" : (
        <main className=" min-h-screen bg-green-100" onMouseUp={(e) => document.onmousemove = null}>

            {/*Header*/}
            <div className=' flex items-center '>
                <div className=' ml-[130px]'>
                </div>
                <div className=' ml-[310px]'>
                    <img className=' animatecss animatecss-fadeInLeft  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />
                </div>
                <div className=' ml-[450px] justify-center'>
                    <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo {myDecodedToken.nome}</h1>
                </div>
            </div>


            {/*Body*/}
            {/*<img className='h-[660px] w-[46px] ml-[350px] mt-[50px] ' src={line2} alt="line2"/> 
*/}
            <img className='h-2 w-[1920px]' src={line} alt="line" />
            {/*Nova atividade*/}

            <a href="http://localhost:5173/newtask" className=" mt-14 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
                <div className="flex space-x-3">

                    <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">New Task</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-lg">Criar nova atividade.</p>
            </a>


            {/*Links*/}
            <div className='text-3xl ml-20 mt-[80px] font-bold leading-tight '>
                {/* Defina seus links de navegação */}
                <nav>
                    <ul>
                        <li className='text-black hover:text-green-500'>
                            <Link className=' ' to="/">Home</Link>
                        </li>
                        <li className='mt-[20px] text-black hover:text-green-500'>
                            <Link to="/lastmatters">Ultimos assuntos</Link>
                        </li>
                        <li className='mt-[20px] text-black hover:text-green-500'>
                            <Link to="/quest">Questionários</Link>
                        </li>
                        <li className='mt-[20px] text-black hover:text-green-500'>
                            <Link to="/profile">Perfil</Link>
                        </li>
                    </ul>
                </nav>
            </div>


            {/*Blur
 <div className="absolute left-[15rem] top-1/2 h-[350px] w-[700px] -translate-y-1/2 translate-x-1/2 rounded-full bg-green-300  blur-2xl  " />
*/}

            {/*Estatisticas*/}
            <Outlet />
            <PomodoroTimer />
        </main>
    )
}

