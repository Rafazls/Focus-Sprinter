import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom';
//import line2  from '../assets/line2.svg'


export default function Math() {
  return (
    <main className=" min-h-screen bg-green-100 ">
      {/*Header*/}
      <div className=' flex items-center animatecss animatecss-fadeInLeft '>
        
        <div className=' ml-[310px]'>
          <img className=' animatecss animatecss-fadeInLeft  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />
        </div>
        <div className=' ml-[450px] justify-center'>
          <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo João</h1>
        </div>
      </div>

      {/*Body*/}
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

      {/*Quest*/}
      <div className="">
  <div className=' bg-white-200 w-[1200px] h-[665px]  absolute rounded-3xl ml-[500px] top-64  bg-white  '>

  <h1 className=' text-4xl mb-3  mt-6 text-green-600  ml-[500px] '>Questionário</h1>

{/*Primeira Questão*/}
       <div className=''>
            <h1 className=' text-lg mb-4 ml-8 '> 1. Considere um triângulo retângulo com um ângulo agudo de 30 graus. Se a hipotenusa tem comprimento igual a 10 unidades, qual é o valor da altura em relação ao ângulo de 30 graus?</h1>
            <div className="form-control  mb-4 ml-8 ">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">5 unidades </span>
              </label>
            </div>
            <div className="form-control  mb-4 ml-8 ">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">5√3 unidades</span>
              </label>
            </div>
            <div className="form-control  mb-4 ml-8 ">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">10 unidades</span>
              </label>
            </div>
          </div>

          {/*Segunda Questão*/}
          <div className=''>
            <h1 className='text-lg mb-4 ml-8'> 2. No triângulo ABC, o ângulo A mede 45 graus e o lado oposto a esse ângulo tem comprimento igual a 8 unidades. Qual é o valor do lado adjacente ao ângulo A?
            </h1>
            <div className="form-control mb-4 ml-8">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">4 unidades</span>
              </label>
            </div>
            <div className="form-control mb-4 ml-8">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">8 unidades</span>
              </label>
            </div>
            <div className="form-control mb-4 ml-8">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">8√2 unidades</span>
              </label>
            </div>
          </div>

          {/*Terceira Questão*/}
          <div className=''>
            <h1 className='text-lg mb-4 ml-8'> 3.Em um triângulo retângulo, a medida de um ângulo agudo é 60 graus e o cateto oposto a esse ângulo tem comprimento igual a 6 unidades. Qual é o valor da hipotenusa?</h1>
            <div className="form-control mb-4 ml-8">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-30" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">3 unidades</span>
              </label>
            </div>
            <div className="form-control mb-4 ml-8">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-30" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text ml-3">6 unidades</span>
              </label>
            </div>
            <div className="form-control mb-1 ml-8">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-30" className="radio checked:bg-blue-500  mr-2" />
                <span className="label-text ml-3">12 unidades</span>
              </label>
            </div>
          </div>
         
          <a href="#_" className="  ml-[500px] relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-green-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Verificar</span>
</a>

  
  </div>
  </div>


    </main>
  )
}
