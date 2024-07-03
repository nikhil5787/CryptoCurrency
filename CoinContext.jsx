import { createContext, useState ,useEffect} from "react";

export const CoinContext= createContext();


 const CoinProvider=(props)=>{

    const[coin,SetCoin]=useState([]);
    const[currency,SetCurrency]=useState({
        name:"usd",
        Symbol:"$"
        
    })

    useEffect(()=>{
        fetchCoinData()

    },[currency])

    const fetchCoinData=async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-KDzJGcG1pWMGKmSxXjtk96Z2'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => SetCoin(response))
            .catch(err => console.error(err));
       
    }

    const ContextValue={
        coin,currency,SetCurrency
    }


return(
    <CoinContext.Provider value={ContextValue}>
        {props.children}

    </CoinContext.Provider>



)


}

export default  CoinProvider;