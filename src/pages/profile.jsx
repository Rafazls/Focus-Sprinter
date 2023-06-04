import logo from '../assets/logo.svg'
import avatar from '../assets/avatar.svg'
import { Searchbar } from '../components/Searchbar'
import line  from '../assets/line.svg'
import { Link } from 'react-router-dom';

////import line2  from '../assets/line2.svg'
//import { useRef } from 'react';
//import { Toast } from 'primereact/toast';
//import { FileUpload } from 'primereact/fileupload';
//
//
//function upload(){
//  const toast = useRef(null);
//
//    const onUpload = () => {
//        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
//    };
//        
//    return (
//        <div className="">
//            <Toast ref={toast}></Toast>
//            <FileUpload  mode='basic' name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} auto chooseLabel="Browse" />
//        </div>  
//    )
//}
//
export default function profile() {
  return (
<main className=" min-h-screen bg-green-100">

  {/*Header*/}
<div className=' flex items-center '>
<div className=' ml-[130px]'>
  <Searchbar/>
</div>
<div className=' ml-[310px]'>
<img className='  sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-80 2xl:h-40' src={logo} alt="Focus-sprinter logo " />          
</div>
<div className=' ml-[450px] justify-center'>
    <h1 className='  text-4xl font-bold leading-tight text-green-500 '> Bem Vindo João</h1>
</div>
</div>

  {/*Body*/}
<img className='h-2 w-[1920px]' src={line} alt="line"/> 
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




 {/*Estatisticas*/}
<div className="grid grid-cols-4  ">
  <div className=' bg-white-200 w-[1200px] h-[665px]  absolute rounded-3xl ml-[500px] top-64  bg-white grid grid-cols-4  '>

<div>

<img className=' flex sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-36 xl:h-36  mt-10 rounded-full ml-20 mb-6 ' src={avatar} alt="Focus-sprinter avatar" />          
<h1 className=' text-3xl ml-16 mb-9'>Rafael Souza </h1>
<p className="text-2xl mb-6 ml-10">Biografia</p>
<div className=" ml-3 ">
      <input className="shadow appearance-none border rounded w-full h-[200px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-start" id="username" type="text" />

    </div>

</div>

<div>
<h2>Matérias preferidas</h2>
</div>

<div>
<h2>Materiais de apoio</h2>

</div>


<div>
<h2>Tempo decorrido</h2>

</div>

  
  </div>
  

  </div>

</main>
  )
}
