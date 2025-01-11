
import { Routes, Route } from 'react-router-dom'
import TextInputForm from './components/TextnputForm/TextInputForm'
import TextInputFormContainer from './components/textnputForm/TextInputFormContainer'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<StartGame/>}></Route>
      <Route path='/play' element={<PlayGame/>}></Route>
    </Routes>
  )
}

export default App
