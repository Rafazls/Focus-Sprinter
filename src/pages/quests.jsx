import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom';
import scrum2 from '../assets/scrum_board2.svg'
//import line2  from '../assets/line2.svg'


export default function quests() {
  return (
    <main className=" min-h-screen bg-green-100 ">
      {/*Header*/}
      <div className=' flex items-center animatecss animatecss-fadeInLeft '>

        <div className=' ml-[310px]'>
          <img className=' animatecss animatecss-fadeInLeft  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />
        </div>
        <div className=' ml-[450px] justify-center'>
          <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo Rafael</h1>
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
      <div className="grid grid-cols-1  ">
        <div className=' bg-white-200 w-[1200px] h-[665px] inline-block absolute rounded-3xl ml-[500px] top-64  bg-white'>
          <div className="grid grid-cols-2">
            <div>
              <img className=' w-[420px] h-[420px] ml-8 mt-[100px] animatecss animatecss-fadeInLeft ' src={scrum2} alt="" />
            </div>
            <div>
              <h1 className=' text-4xl ml-[90px] animatecss animatecss-fadeInLeft  text-green-500 mt-8 mb-7'>O que vai estudar Hoje? </h1>
              <div className='ml-[50px]'>
                <a href="http://localhost:5173/quest/mat" className=" mt-14 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
                  <div className="flex space-x-3">
                    <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">Matemática</h3>
                  </div>
                </a>
                <a href="http://localhost:5173/quest/port" className=" mt-14 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
                  <div className="flex space-x-3">
                    <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">Português</h3>
                  </div>
                </a>

                <a href="http://localhost:5173/quest/his" className=" mt-14 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
                  <div className="flex space-x-3">
                    <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">História</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
