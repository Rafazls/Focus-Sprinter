import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line  from '../assets/line.svg'
import scrum  from '../assets/scrum_board.svg'
import { Link } from 'react-router-dom';
//import line2  from '../assets/line2.svg'


export default function Home() {
  return (
<main className=" min-h-screen bg-green-100">

  {/*Header*/}
<div className=' flex items-center '>
<div className=' ml-[130px]'>
</div>
<div className=' ml-[310px]'>
<img className=' animatecss animatecss-fadeInLeft  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />          
</div>
<div className=' ml-[450px] justify-center'>
    <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo Rafael</h1>
</div>
</div>


  {/*Body*/}
{/*<img className='h-[660px] w-[46px] ml-[350px] mt-[50px] ' src={line2} alt="line2"/> 
*/}
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


 {/*Blur
 <div className="absolute left-[15rem] top-1/2 h-[350px] w-[700px] -translate-y-1/2 translate-x-1/2 rounded-full bg-green-300  blur-2xl  " />
*/}

 {/*Estatisticas*/}
<div className="grid grid-cols-1  ">
  <div className=' bg-white-200 w-[1200px] h-[665px] inline-block absolute rounded-3xl ml-[500px] top-64  bg-white'>
    <h1 className=' text-4xl ml-[420px] animatecss animatecss-fadeInLeft  text-green-500 mt-8'>Uma Nova forma de Estudar </h1>
    <div className="grid grid-cols-2">
<div> 
<h1 className=' text-lg mt-4 ml-6 mb-8 '> O Focus Sprinter é projetado para fornecer as ferramentas, técnicas e recursos necessários para ajudá-lo a aproveitar ao máximo cada minuto do seu dia e tornar seu tempo de estudo mais eficaz e recompensador. Seja você um estudante em busca de melhores resultados acadêmicos, um profissional que deseja se manter atualizado ou alguém que simplesmente busca aprender algo novo, estamos aqui para ajudar.</h1>

<h1 className='text-lg mb-4 ml-6'>Acreditamos que, ao otimizar seu tempo e aperfeiçoar suas habilidades de estudo, você poderá alcançar resultados extraordinários em sua vida pessoal e profissional. </h1>
 
 <h1 className='text-lg font-bold ml-6 '>Então, por que não começamos agora? </h1>
 
 <a href="http://localhost:5173/newtask" className=" mt-10 ml-[60px] animatecss animatecss-fadeInLeft  relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-green-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Crie já uma nova tarefa</span>
</a>

</div>
<div>
<img className=' w-[520px] h-[520px] ml-8 animatecss animatecss-fadeInLeft ' src={scrum} alt="" />
</div>

        
    </div>
  </div>
  

  </div>

</main>
  )
}

