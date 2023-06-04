import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom';
//import line2  from '../assets/line2.svg'


export default function quests() {
  return (
    <main className=" min-h-screen bg-green-100">
      {/*Header*/}
      <div className=' flex items-center '>
        <div className=' ml-[130px]'>
          <Searchbar />
        </div>
        <div className=' ml-[310px]'>
          <img className='  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />
        </div>
        <div className=' ml-[450px] justify-center'>
          <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo João</h1>
        </div>
      </div>

      {/*Body*/}
      <img className='h-2 w-[1920px]' src={line} alt="line" />
      
      {/*Nova atividade*/}
      <a href="#" className=" mt-14 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
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
      <div className="grid grid-cols-1  ">

        <div className=' bg-white-200 w-[1200px] h-[760px] inline-block absolute rounded-3xl ml-[500px] top-52  bg-white'>
          <h1 className=' text-4xl ml-[520px] mt-10 text-green-600 '>Questionário</h1>
          <p className="w-[1200px] mt-[20px] text-2xl text-center leading-relaxed">
            Tema:
            <a href="" className=" text-green-400 hover:text-green-500 ">
              Trigonometria
            </a>
          </p>


          {/*Alternativas*/}

          {/*Primeira Questão*/}
          <div className='ml-[40px] mb-3 mt-3'>
            <h1 className=' text-lg mb-3 '> 1. Considere um triângulo retângulo com um ângulo agudo de 30 graus. Se a hipotenusa tem comprimento igual a 10 unidades, qual é o valor da altura em relação ao ângulo de 30 graus?</h1>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">5 unidades </span>
              </label>
            </div>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">5√3 unidades</span>
              </label>
            </div>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">10 unidades</span>
              </label>
            </div>
          </div>

          {/*Segunda Questão*/}
          <div className='ml-[40px] mb-3 mt-3'>
            <h1 className='text-lg mb-3'> 2. No triângulo ABC, o ângulo A mede 45 graus e o lado oposto a esse ângulo tem comprimento igual a 8 unidades. Qual é o valor do lado adjacente ao ângulo A?
            </h1>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">4 unidades</span>
              </label>
            </div>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">8 unidades</span>
              </label>
            </div>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">8√2 unidades</span>
              </label>
            </div>
          </div>

          {/*Terceira Questão*/}
          <div className='ml-[40px] mb-3 mt-3'>
            <h1 className='text-lg mb-3'> 3.Em um triângulo retângulo, a medida de um ângulo agudo é 60 graus e o cateto oposto a esse ângulo tem comprimento igual a 6 unidades. Qual é o valor da hipotenusa?</h1>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-30" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">3 unidades</span>
              </label>
            </div>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-30" className="radio checked:bg-blue-500 mr-2" />
                <span className="label-text">6 unidades</span>
              </label>
            </div>
            <div className="form-control mb-2">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-30" className="radio checked:bg-blue-500  mr-2" />
                <span className="label-text">12 unidades</span>
              </label>
            </div>
          </div>
          <button 
  type="button"
  className="inline-block mt-5 ml-5 rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
  Verificar
</button>

        </div>
      </div>

    </main>
  )
}
