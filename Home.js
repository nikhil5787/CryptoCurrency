import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import { CoinContext } from './CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const{coin,currency}=useContext(CoinContext);
  const[displayCoin, SetDisplayCoin]=useState([]);
  const[search,SetSearch]=useState('');
  const[page,SetPage]=useState(1);

  const SearchHandler=(event)=>{
    SetSearch(event.target.value);
    if(event.target.value===""){
      SetDisplayCoin(coin)
    }}

    const clickHandler=(select)=>{
  if(select>=1 && select<=displayCoin.length/10)
      SetPage(select)
    }

  const submitHandler=async(event)=>{
    event.preventDefault();
    const response=await coin.filter((item)=>{
     return item.name.toLowerCase().includes(search.toLowerCase())
 
    })
    SetDisplayCoin(response)

  }

  useEffect(()=>{
    SetDisplayCoin(coin)

  },[coin])


 
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Real-Time Cryptocurrency  <br/>Price Tracker</h1>
        <p>Welcome to the World's Largest Crypto Marketplace.Sign up to expore more about Crypto Marketplace</p>
        <form onSubmit={submitHandler}>
          <input onChange={SearchHandler} value={search} type='Text' placeholder='Search for Crypto' />  
         
          <button type='Submit'>Search</button>

        </form>



      </div>
      <div className='table'>
        <div className='table-layout'>
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p style={{textAlign:"center"}}>24H Change</p>
        <p style={{textAlign:"right"}}>Market Cap</p>
        </div>
        
        {
         displayCoin.slice(page*10-10,page*10).map((item,index)=>(
            <Link  to={`/Coin/${item.id}`} className='table-layout' key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img className='images' src={item.image} alt='images'/>
                <p>{item.name +"-"+ item.symbol}</p>
              </div>
              <p >{currency.symbol} {item.current_price}</p>
              <p  style={{textAlign:"center"}} className={item.price_change_24h>0?"green":"red"}>{Math.floor(item.price_change_24h*100)/100}</p>
              <p style={{textAlign:"right"}}>{item.market_cap}</p>
            </Link>

            
         ))
        }
       
      </div>
      {
        displayCoin.length> 0 && <div className='pagination'>
          <span onClick={()=>clickHandler(page-1)}>◀</span>
          {
            [...Array(Math.ceil(displayCoin.length/10))].map((_,i)=>{
              return <span className={page===i+1?"pagination_Selected":""} key={i} onClick={()=>clickHandler(i+1)}>{i+1}</span>

            })}
          <span  onClick={()=>clickHandler(page+1)}>▶</span>
        </div>

      }
    

    

      
      
      
    </div>
  

  )
}

export default Home
