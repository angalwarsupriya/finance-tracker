import React from 'react';
import './index.css'
const DisplayResults = ({ totalIncome, totalExpenses, totalSavings, selectedCurrency, exchangeRatesState }) => {
    console.log('dddddddddddddddddddddd[pppppppppppp')
  return (
    <>
      <div style={{marginBottom:"20px", margin:'20px'}}>
      <label htmlFor="currency" className="block text-lg mb-2">Select Currency:</label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="selectin"
      >
        {exchangeRatesState && Object.keys(exchangeRatesState.conversion_rates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
        </select>
        </div>
      <div className='total-summary-con-row'>
        <div className='con1 con'>
          <h3>Total Income:</h3>
        </div>
        <div className='con2 con'>
          <h3>Total Expenses:</h3>
        </div>
        <div className='con3 con'>
          <h3>Total Savings: </h3>
        </div>
      </div>
    </>
  );
};

export default DisplayResults;

