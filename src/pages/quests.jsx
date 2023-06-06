import logo from '../assets/logo.svg'
import { Searchbar } from '../components/Searchbar'
import line from '../assets/line.svg'
import { Link } from 'react-router-dom';
import scrum2 from '../assets/scrum_board2.svg'
import { useContext, useEffect, useState } from 'react';
import { Auth } from '../AuthContext';
import axios from 'axios';
//import line2  from '../assets/line2.svg'


export default function quests() {
  const [tasks, setTasks] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { token } = useContext(Auth)
  useEffect(() => {
    axios.get('http://localhost:3001/task', {
      headers: {
        Authorization: token
      }
    }).then((value) => {
      console.log(value.data)
      setTasks(value.data)
      setLoaded(true)
    })
  }, [])

  return loaded ? (
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
              {tasks.map((value, index) => {
                if (!value.questionsTodo){
                  return (
                    <a href={`http://localhost:5173/quest/${value.id}`} className=" mt-14 group block max-w-xs ml-[62px] rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-500 hover:ring-green-500">
                      <div className="flex space-x-3">
                        <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">{value.nomeMateria}</h3>
                      </div>
                    </a>
                  )
                }
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  )
}
