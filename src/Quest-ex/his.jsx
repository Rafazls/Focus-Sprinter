import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom';
//import line2  from '../assets/line2.svg'


export default function His() {
  return (
    <div className="">
      <div className=' bg-white-200 w-[1200px] h-[665px]  absolute rounded-3xl ml-[500px] top-64  bg-white  '>

        <h1 className=' text-4xl mb-3  mt-6 text-green-600  ml-[500px] '>Questionário</h1>

        {/*Primeira Questão*/}
        <div className=''>
          <h1 className=' text-lg mb-4 ml-8 '> 1.Qual foi o evento que marcou o início da Revolução Francesa?
          </h1>
          <div className="form-control  mb-4 ml-8 ">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Queda da Bastilha </span>
            </label>
          </div>
          <div className="form-control  mb-4 ml-8 ">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Golpe de Estado de Napoleão Bonaparte</span>
            </label>
          </div>
          <div className="form-control  mb-4 ml-8 ">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Execução do rei Luís XVI</span>
            </label>
          </div>
        </div>

        {/*Segunda Questão*/}
        <div className=''>
          <h1 className='text-lg mb-4 ml-8'> 2.Qual foi o principal objetivo dos revolucionários durante a Revolução Francesa?

          </h1>
          <div className="form-control mb-4 ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Estabelecer uma monarquia absolutista</span>
            </label>
          </div>
          <div className="form-control mb-4 ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Manter a antiga ordem feudal</span>
            </label>
          </div>
          <div className="form-control mb-4 ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-20" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Definir um sistema político mais justo e igualitário</span>
            </label>
          </div>
        </div>

        {/*Terceira Questão*/}
        <div className=''>
          <h1 className='text-lg mb-4 ml-8'> 3.Qual foi o período conhecido como o "Terror" durante a Revolução Francesa?</h1>
          <div className="form-control mb-4 ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-30" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3">Fase do Diretório</span>
            </label>
          </div>
          <div className="form-control mb-4 ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-30" className="radio checked:bg-blue-500 mr-2" />
              <span className="label-text ml-3"> Período dos Girondinos</span>
            </label>
          </div>
          <div className="form-control mb-1 ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-30" className="radio checked:bg-blue-500  mr-2" />
              <span className="label-text ml-3">Governo do Comitê de Salvação Pública</span>
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
  )
}
