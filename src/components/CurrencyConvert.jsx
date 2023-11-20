import React, { useEffect, useState } from 'react'
import './currency.css'
import axios from 'axios'

const CurrencyConvert = () => {
    const [rates, setRates]=useState(null)
    const [fromCurrency,setFromCurrency]=useState("USD")
    const [toCurrency,setToCurrency]=useState("EUR")
    const [amout,setAmout]=useState(1)
    const [convertedAmount,setConvertedAmount]=useState(null)

    // vai ser disparado quando a pagina carrega

    useEffect(()=>{
       
        
        axios.get("https://v6.exchangerate-api.com/v6/33332548d2112393d3992002/latest/USD").then((response)=>{
            // no axios tem o .data
            setRates(response.data.conversion_rates)
        }).catch((error)=>{
            console.log(`Ocorreu um erro ${error}`)
        });
    },[]);

    // faz uma nova checagem para atualizar
    useEffect(()=>{
        if(rates){
            const ratesFrom = rates[fromCurrency] || 0
            const rateTo = rates[toCurrency] || 0
            setConvertedAmount(((amout / ratesFrom) * rateTo).toFixed(2));
        }
    },[amout,fromCurrency,toCurrency,rates])

    if (!rates) {
        return <div>Carregando...</div>;
    }
  return (
    <div className='converter'>
        <h3>Conversor de moedas</h3>
        <input type="number" value={amout} onChange={(e)=>setAmout(e.target.value)}/>
        <span>Selecione as moedas</span>
        <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
           {Object.keys(rates).map((curr)=>(
                <option value={curr} key={curr}>
                    {curr}
                </option>
           ))}
        </select>
        <span>Para</span>
        <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
            {Object.keys(rates).map((curr)=>(
                <option value={curr} key={curr}>
                    {curr}
                </option>
            ))}
        </select>
        <h4>{convertedAmount} {toCurrency}</h4>
        <p>{amout} {fromCurrency} valem {convertedAmount} {toCurrency}</p>

    </div>
  )
}

export default CurrencyConvert