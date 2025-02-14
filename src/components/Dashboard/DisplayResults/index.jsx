import React from 'react';
import './index.css'
import { useState } from 'react';
//importing react-icons 
import { TbMoneybag } from "react-icons/tb";
import { LuPiggyBank } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
const DisplayResults = ({ totalIncome, totalExpenses, totalSavings, exchangeRatesState }) => {

  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  console.log(selectedCurrency)
  const rate = exchangeRatesState.conversion_rates[selectedCurrency];
  const totalIncomeInSelectedCurrency = totalIncome * rate;
  const totalExpensesInSelectedCurrency = totalExpenses * rate;
  const totalSavingsInSelectedCurrency = totalSavings * rate;

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
          <div className='con-row'>
            <h3>Total Income</h3>
            <p className='usd-text'>{totalIncomeInSelectedCurrency} <span>{selectedCurrency}</span></p>
            <p className='selectedtext'>{totalIncome} <span>USD</span> </p>
          </div> 
          <div className='round-con'>
            <TbMoneybag className='icon'></TbMoneybag>
          </div>
        </div>
        <div className='con2 con'>
          <div className='con-row'>
            <h3>Total Spend</h3>
            <p className='usd-text'>{totalExpensesInSelectedCurrency} <span>{selectedCurrency}</span></p>
            <p className='selectedtext'>{totalExpenses} <span>USD</span></p>
          </div>
          <div className='round-con'>
            <BiMoneyWithdraw className='icon'></BiMoneyWithdraw>
          </div>
        </div>
        <div className='con3 con'>
          <div className='con-row'>
            <h3>Total Savings</h3>
            <p className='usd-text'>{totalSavingsInSelectedCurrency} <span>{selectedCurrency}</span></p>
            <p className='selectedtext'>{totalSavings} <span>USD</span></p>
          </div>
          <div className='round-con'>
            <LuPiggyBank className='icon'></LuPiggyBank>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayResults;

