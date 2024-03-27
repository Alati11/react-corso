import './App.css'
import Card from './pages/Card'
import Navbar from './components/Navbar'
import CardForm from './components/CardForm'
import Example from './components/Example'
import { useSelector } from 'react-redux'

function App() {
  const cities = useSelector((state) => state.cities.value);

  return (
    <>
      <Navbar></Navbar>
      <Example></Example>
      <CardForm></CardForm>
    </>
  )
}

export default App
