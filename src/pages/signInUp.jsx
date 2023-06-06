import inferiorDireito from '../assets/Vector.png'
import inferiorEsquerdo from '../assets/Vector-1.png'
import superiorDireito from '../assets/Vector-3.png'
import superiorEsquerdo from '../assets/Vector-2.png'
import logo from '../assets/focus-sprinter-logo.png'
import './sign.css'
import axios from "axios"
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../AuthContext'

function Background({ children }){
    return (
        <div className='containerCentered w-full h-full bg-green-50'>
            <img src={inferiorDireito} alt="" style={{position:'absolute', bottom: 0, right: 0}}/>
            <img src={inferiorEsquerdo} alt="" style={{position:'absolute', bottom: 0, left: 0}}/>
            <img src={superiorDireito} alt="" style={{position:'absolute', top: 0, right: 0}}/>
            <img src={superiorEsquerdo} alt="" style={{position:'absolute', top: 0, left: 0}}/>

            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="formLogin">
                {children}
            </div>
        </div>
    )
}

function Login(){
    const { token, setToken } = useContext(Auth)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)



    useEffect(()=>{
        axios.get('http://localhost:3001/auth', {
          headers: {
            'authorization': `${token}`
          }
        }).then((value) => {
          if (value.status === 200 && value.data.validToken) location.pathname = '/'
          console.log(value)
        })
    }, [])
    async function loginAction(){
        const returned = await axios.post("http://localhost:3001/signin", {
            email, senha
        })
        console.log(returned.data.Authenticate)
        if (returned.data.Authenticate){
            localStorage.setItem('token', returned.data.token)
            setToken(returned.data.token)
            location.pathname = '/'
        }
    }

    return (
        <Background>
            <h3>Welcome</h3>
            <div className="inputs">
                <div className="input">
                    <label htmlFor="login">Login:</label>
                    <input type="text" name="login" id="" onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
                <div className="input">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="" onChange={(e) => {
                        setSenha(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
            </div>
            <button onClick={loginAction}>Entrar</button>
            <p>Não tem cadastro? <a href="/cadastro">Faça já</a></p>
        </Background>
    )
}
function Cadastro(){
    const { token, setToken } = useContext(Auth)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [nome, setNome] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:3001/auth', {
          headers: {
            'authorization': `${token}`
          }
        }).then((value) => {
          if (value.status === 200 && value.data.validToken === true) location.pathname = '/'
          console.log(value)
        })
    }, [])
    async function signUp(){
        const returned = await axios.post("http://localhost:3001/signup", {
            email, senha, nome
        })
        if (returned.data.created){
            localStorage.setItem('token', returned.data.token)
            setToken(returned.data.token)
            location.pathname = '/'
        }
        if (returned.data.erro) console.log(returned.data.erro)
    }

    return (
        <Background>
            <h3>Cadastro</h3>
            <div className="inputs">
                <div className="input">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="" onChange={(e) => {
                        setNome(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
                <div className="input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
                <div className="input">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="" onChange={(e) => {
                        setSenha(e.target.value)
                        console.log(e.target.value)
                    }} />
                </div>
            </div>
            <button onClick={signUp}>Cadastrar</button>
            <p>Já tem login? <a href="/login">Entre já</a></p>
        </Background>
    )
}
export {Login, Cadastro}