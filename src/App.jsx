import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    {id:1, name: "Huraira"},
    {id:2, name: "Abdul"},
    {id:3, name: "Haris"},
  ])

  const handler= ()=>{
  setStudents(students.slice(1))
  }


  return (
   <> 
   <button onClick={handler}>Click Me</button>
   {
    students.map ((element)=>{
      return <Input element={element.name} key={element.id}/>
    })
   }
   </>
  )
}

export default App

const Input = ({element})=>{
  return(
    <>
    <input type="text" defaultValue={element} />
    </>
  )
}