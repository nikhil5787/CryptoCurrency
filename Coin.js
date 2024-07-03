import React, { useContext, useEffect, useState } from 'react'
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from './CoinContext';



const Coin = () => {

  const {CoinId}=useParams()
  const[coinData,setCoinData]=useState();
  const {currency}=useContext(CoinContext)

  useEffect(()=>{
    fetchCoinData();
  },[currency]);

  const fetchCoinData= async()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

   fetch(`https://api.coingecko.com/api/v3/coins/${CoinId}`, options)
  .then(response => response.json())
  .then(response => setCoinData(response))
  .catch(err => console.error(err));

      
  }

  
      if(coinData){
        return (
          <div className='coin'>
            <div className='coinName'>
              <img src={coinData.image.large} alt='coinImage'/>
              <p><b>{coinData.name}({coinData.symbol})</b></p>
            </div>
           
          </div>
        )
      }
    
}

export default Coin
