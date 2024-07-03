import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

export const Charts = ({coinChart}) => {
    const[data,SetData]=useState([["Date","Prices"]]);

    useEffect(()=>{
        const dataCopy=[["Date","Prices"]]
        if(coinChart.prices){
            coinChart.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString()}`])

            })
            SetData(dataCopy);
        }
    },[coinChart])





  return (
    <Chart
    chartType='LineChart'
    data={(data)}
    height="100%"
    legendToggle
    
    />




  
  )
}
 