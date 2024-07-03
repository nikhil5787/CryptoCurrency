
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Coin from './Components/Coin';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Components/SignUp/Login';



function App() {
  return (
    
    <>
     <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}></Route>
   
   <Route path='/Coin/:CoinId' element={<Coin/>}></Route>
   <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    <Footer/>
  
    
    
    </>
  );
}

export default App;
