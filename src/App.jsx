
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Course from './Compnents/Coursh/Course'

import Header from './Compnents/Header/Header'

function App() {
  

  return (
    <>
      
      
      <Header></Header>
      <div className='flex'>
      <Course></Course>
      
      </div>
      
    </>
  )
}

export default App
