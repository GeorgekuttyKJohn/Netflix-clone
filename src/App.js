import './App.css';
import Home from '../src/Components/Pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom';
import Login from '../src/Components/Pages/Login/Login'
import Player from './Components/Pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {



  return (
    <div>
       <ToastContainer  theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
