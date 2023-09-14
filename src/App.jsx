
import './App.css'
import Cart from './Compnents/Cart/Cart'
import Course from './Compnents/Coursh/Course'
import Header from './Compnents/Header/Header'

function App() {
  

  return (
    <>
      
      
      <Header></Header>
      <div className='flex'>
      <Course></Course>
      <Cart></Cart>
      </div>
      
    </>
  )
}

export default App
