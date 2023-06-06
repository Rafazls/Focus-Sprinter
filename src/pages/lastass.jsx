import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom';
import PomodoroTimer from '../components/PomodoroTimer';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from '../AuthContext';
//import line2  from '../assets/line2.svg'


export default function lastmatters() {
  const [ tasks, setTasks ] = useState(null)
  const [ loaded, setLoaded ] = useState(false)
  const { token } = useContext(Auth)
  useEffect(()=>{
    axios.get('http://localhost:3001/task', {
      headers: {
        Authorization: token
      }
    }).then((value) => {
      setTasks(value.data)
      setLoaded(true)
    })
  }, [])

  return loaded ? (<div className="grid grid-cols-1  ">
  <div className=' bg-white-200 w-[1200px] h-[665px] inline-block absolute rounded-3xl ml-[500px] top-64 text-center bg-white'>
    <h1 className=' text-2xl'>Ultimos assuntos</h1>
    <table className='w-full mt-8'>
      <tr>
        <th>Matéria</th>
        <th>Tempo</th>
        <th>Rendimento</th>
      </tr>
      {tasks.map((value, index)=>{
        return (
          <tr key={value.id}>
            <td className='border-2 border-b-2 border-t-0 border-x-0'>{value.nomeMateria}</td>
            <td className='border-2 border-b-2 border-t-0 border-x-0'>{value.tempo} min</td>
            <td className='border-2 border-b-2 border-t-0 border-x-0'>{value.rendimentoQuest}%</td>
            {value.questionsTodo ? '' : (
              <td className='border-2 border-b-2 border-t-0 border-x-0'>
                <button className='bg-green-500 p-3 rounded-full hover:bg-green-400 '>Fazer questionário</button>
              </td>
            )}
          </tr>
        )
      })}
    </table>
  </div>
</div>) : (
  <div>
    <p>Loading...</p>
  </div>
)
}
