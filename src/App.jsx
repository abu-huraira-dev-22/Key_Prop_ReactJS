import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const questions = [
  'Why should we use React?',
  'What is h1 tag element?'
]

function App() {
  // const [students, setStudents] = useState([
  //   {id:1, name: "Huraira"},
  //   {id:2, name: "Abdul"},
  //   {id:3, name: "Haris"},
  // ])

  // const handler= ()=>{
  // setStudents(students.slice(1))
  // }

const  [questionNum, setQuestionNum] = useState(1) 


  return (
    <>
    <button onClick={()=> setQuestionNum(questionNum==1?2:1)}>Change Question</button>
    {
      questionNum == 1? <QuestionBox key={1} question={questions[0]}/>:<QuestionBox key={2} question={questions[1]}/>
    }
    </>

  //  <> 
  //  <button onClick={handler}>Click Me</button>
  //  {
  //   students.map ((element)=>{
  //     return <Input element={element.name} key={element.id}/>
  //   })
  //  }


  //  </>
  )
}

export default App

// const Input = ({element})=>{
//   return(
//     <>
//     <input type="text" defaultValue={element} />
//     </>
//   )
// }

const QuestionBox = ({question})=>{
  const [answer,setAnswer] = useState("")
  return(
    <>
    <h1>{question}</h1>
    <input style={{background:answer?"yellow":'white',color:'black'}} type="text" onChange={(e)=>setAnswer(e.target.value)} />
    </>
  )
}