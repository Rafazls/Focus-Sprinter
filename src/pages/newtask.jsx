import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import newtaskimg from '../assets/newatv.svg'
import { Link } from 'react-router-dom';
import PomodoroTimer from '../components/PomodoroTimer';
import axios from 'axios';
import { Auth } from '../AuthContext';
import { useContext, useState } from 'react';

//import line2  from '../assets/line2.svg'


export default function NewTask() {
  const { token } = useContext(Auth)
  const [ materiaInput, setMateriaInput ] = useState(null)
  const [ tempoInput, setTempoInput ] = useState(null)
  return (
    <div className="">
      <div className=' bg-white-200 w-[1200px] h-[665px] inline-block absolute rounded-3xl ml-[500px] top-64  bg-white'>
        <div className="grid grid-cols-2">
          <div>
            <img className=' w-[420px] h-[420px] ml-8 mt-[100px] animatecss animatecss-fadeInLeft ' src={newtaskimg} alt="" />
          </div>
          <div>
            <h1 className=' text-4xl ml-[90px] animatecss animatecss-fadeInLeft text-center text-green-500 mt-8 mb-7'>Qual será a nova atividade de hoje?</h1>
            <h1 className=' text-2xl ml-[90px] animatecss animatecss-fadeInLeft text-center text-green-500 mt-8 mb-7'>Estamos Curiosos!!</h1>

            <div class="w-72 mt-16">
              <div class="relative h-10 w-full min-w-[200px] ml-[110px] mb-6">
                <div class="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <i class="fa fa-tasks" aria-hidden="true"></i>
                </div>
                <input
                  className="peer h-full w-full rounded-[7px] border  border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  onChange={(e)=> setMateriaInput(e.target.value)}
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Nome do tema
                </label>
              </div>
            </div>


            <div>
              <div class='flex flex-col relative max-w-sm w-full rounded-lg overflow-hidden mx-auto' x-data="{maximum: ''}">
                <h2 class="font-bold mb-1 text-gray-700 block">Tempo de estudo (hh:mm)</h2>
                <input type='time' class="block w-full mt-1 py-2 px-3 rounded-md shadow-sm focus:outline-none border" onChange={(e)=> setTempoInput(e.target.value)}/>
              </div>
            </div>
            <button href="" className=" mt-10 ml-[420px] animatecss animatecss-fadeInLeft  relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-green-50 group" onClick={async (e)=>{
              const response = await axios.post('http://localhost:3001/task', {
                materia: materiaInput,
                tempo: tempoInput
              }, {
                headers: {
                  Authorization: token
                }
              })

              if (response.status === 200) location.pathname = '/lastmatters'
            }}>
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Salvar</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
