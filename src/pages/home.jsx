import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import scrum from '../assets/scrum_board.svg'
import { Link } from 'react-router-dom';
//import line2  from '../assets/line2.svg'


export default function Home() {
  return (

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

  )
}

