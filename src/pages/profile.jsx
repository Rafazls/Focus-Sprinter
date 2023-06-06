import logo from '../assets/logo.svg'
import avatar from '../assets/avatar.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import tdimage from '../assets/todanateria.png'
import rkimage from '../assets/Rocketseat.png'
import gptimage from '../assets/gpt.jpg'
import { Link } from 'react-router-dom';
import { decodeToken, isExpired } from "react-jwt";
import { useContext } from 'react'
import { Auth } from '../AuthContext'

export default function profile() {
  const { token } = useContext(Auth)
  const myDecodedToken = decodeToken(token)
  return (
    <div className="grid grid-cols-3  ">
      <div className=' bg-white-200 w-[1200px] h-[665px]  absolute rounded-3xl ml-[500px] top-64  bg-white grid grid-cols-3  '>

        <div>
          <h1 className=' text-3xl ml-36 mb-14 mt-4'>{myDecodedToken.nome}</h1>
          <p className="text-2xl mb-6 ml-10">Biografia</p>
          <div>
            <div class='flex flex-col relative max-w-sm w-full rounded-lg overflow-hidden mx-auto' x-data="{maximum: ''}">
              <textarea rows="4" maxlength="310" x-model="maximum" x-ref="maximum"
                class="block w-full mt-1 py-2 px-3 rounded-md shadow-sm focus:outline-none border"></textarea>
            </div>
          </div>

        </div>

        <div>
          <h2 className='text-center text-2xl'>Matérias preferidas</h2>

          <a className=" mt-8 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
            <div className="flex space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">Geografia</h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-lg">Estudo das relações entre o espaço, o meio ambiente e as sociedades humanas.</p>
          </a>

          <a className=" mt-8 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
            <div className="flex space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">Engenharia de Software</h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-lg">Desenvolvimento e manutenção de sistemas de software de forma sistemática e eficiente.
            </p>
          </a>

          <a className=" mt-8 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
            <div className="flex space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">Matemática</h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-lg">Estudo das propriedades, relações e operações dos números e das estruturas abstratas</p>
          </a>
        </div>



        <div className=' items-center justify-center'>
          <h2 className='text-center text-2xl'>Materiais de apoio</h2>

          <div
            className="block w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={tdimage}
                alt="" />
              <a href="https://www.todamateria.com.br/">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-2">
              <h5
                className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Toda Matéria
              </h5>
            </div>
          </div>

          <div
            className="block w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={rkimage}
                alt="" />
              <a href="https://www.rocketseat.com.br/">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-2">
              <h5
                className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Rocketseat</h5>
            </div>
          </div>

          <div
            className="block  w-80 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={gptimage}
                alt="" />
              <a href="https://chat.openai.com/">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-2">
              <h5
                className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                ChatGPT</h5>
            </div>
          </div>

        </div>



      </div>
    </div>

  )
}
