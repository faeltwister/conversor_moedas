import React from 'react'
import './currency.css'
const CurrencyConvert = () => {
  return (
    <div className='converter'>
        <h3>Conversor de moedas</h3>
        <input type="number" />
        <span>Selecione as moedas</span>
        <select >
            <option value="BRL">BRL</option>
        </select>
        <span>Para</span>
        <select >
            <option value="USD">USD</option>
        </select>
        <h4>BRL - USD</h4>
        <p>20 Reais valem 5 Dólares</p>

    </div>
  )
}

export default CurrencyConvert