import logo from '../assets/logo.svg'
import avatar from '../assets/avatar.svg'
import { Searchbar } from '../components/Searchbar'
import line  from '../assets/line.svg'
import tdimage from '../assets/todanateria.png'
import rkimage from '../assets/Rocketseat.png'
import gptimage from '../assets/gpt.jpg'
import { Link } from 'react-router-dom';

export default function profile() {
  return (
<main className=" min-h-screen bg-green-100">

  {/*Header*/}
<div className=' flex items-center '>
<div className=' ml-[130px]'>
  <Searchbar/>
</div>
<div className=' ml-[310px]'>
<img className=' animatecss animatecss-fadeInLeft  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />          
</div>
<div className=' ml-[450px] justify-center'>
    <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo João</h1>
</div>
</div>

  {/*Body*/}
<img className='h-2 w-[1920px]' src={line} alt="line"/> 
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




 {/*Estatisticas*/}
<div className="grid grid-cols-3  ">
  <div className=' bg-white-200 w-[1200px] h-[665px]  absolute rounded-3xl ml-[500px] top-64  bg-white grid grid-cols-3  '>

<div>

<img className=' flex sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-36 xl:h-36  mt-10 rounded-full ml-40 mb-6 ' src={avatar} alt="Focus-sprinter avatar" />          
<h1 className=' text-3xl ml-36 mb-14'>Rafael Souza </h1>
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

</main>
  )
}
