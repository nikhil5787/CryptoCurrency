import React, { useContext } from 'react'
import './navbar.css'
// import logo from '../Images/depositphotos_324700536-stock-illustration-initial-letter-c-logo-design.webp'
import { CoinContext } from './CoinContext'
import { Link } from 'react-router-dom'




const Navbar = () => {

  const {SetCurrency}=useContext(CoinContext)

  const changeHandler=(event)=>{
    switch(event.target.value){
      case "usd" :{
        SetCurrency({name:"usd",Symbol:"$"})
        break;
      }
    
      case "eur" :{
        SetCurrency({name:"eur",Symbol:"€"})
        break;
      }
    
      case "inr" :{
        SetCurrency({name:"inr",Symbol:"₹"})
        break;
      }
    
      default:{
        SetCurrency({name:"usd",Symbol:"$"})
        break;

      }
    }
  }


  return (
    <div className='navbar'>
      {/* <Link to={"/"}>
        <img  className='logo' src={logo} alt='logo' />
        </Link> */}
        <ul>
         <Link to={"/"}><li>Home</li></Link> 
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={changeHandler}>
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
            </select>
            <Link to={"/Login"}>
            <button className='button'>Sign Up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
