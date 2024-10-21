import { createContext, useState } from 'react'
import './App.css'
import { tabSudoku } from './app/back/sudoku5'
import { Calendrier, Footer, MyButton, Title } from './components/indexComponent'
import PlayGame2 from './app/PlayGame/PlayGame2'



const Index = () => {
  const [dis, setDis] = useState('block')
  const handleClick = () => {
    setDis('none')
  }
  return (
    <>
      <div style={{ display: dis }}>
        <div className="container">
          <div className="param">
            <MyButton title={'Coupe'} Color={'back'} className={"pa"} />
            <MyButton title={'Paramétre'} Color={'back'} className={"pa"} />
          </div>
          <Calendrier />
          <Title />
          <MyButton BackgroundColor="rgb(83, 83, 247)" Color="white" title={"Continuer la partie"} className={"btn"} />
          <MyButton handleClick={() => handleClick()} BackgroundColor="white" Color="rgb(83, 83, 247)" title={"Nouvelle partie"} className={"btn"} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export var MyContext = createContext()

function App() {
  return (
    <>
      {/* <MyContext.Provider value={tabSudoku()}> */}
      {/* <Logo /> */}
      {/* <PlayGame2 /> */}
      <Index />
      {/* </MyContext.Provider> */}
    </>
  )
}

export default App
