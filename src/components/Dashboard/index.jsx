import React from 'react'
import './index.css'
import { useState } from 'react'
//imporing components
import Header from '../Header'
import SideBarCompo from '../SideBarCompo'

// importing redux functions
import { useSelector } from 'react-redux';
import useExchangeRates from '../../redux/useExchangeRates'
import LoadingView from './LoadingView'
import ErrorView from './ErrorView'
import DisplayResults from './DisplayResults'
import DashboardSummary from '../DashboardSummary'
function Dashboard() {
    // state for manage currency 
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    // logic of all data 
    const { exchangeRatesState, errorMsg } = useExchangeRates();
    const transactions = useSelector((state) => state.transactions);
    console.log(exchangeRatesState)
  const totalIncome = transactions.filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalExpenses = transactions.filter(transaction => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalSavings = totalIncome - totalExpenses;

  const incomeSources = transactions.filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => {
      const { category, amount } = transaction;
      if (!acc[category]) acc[category] = 0;
      acc[category] += amount;
      return acc;
    }, {});

  const expenseCategories = transactions.filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => {
      const { category, amount } = transaction;
      if (!acc[category]) acc[category] = 0;
      acc[category] += amount;
      return acc;
    }, {});

  const incomeData = Object.keys(incomeSources).map(category => ({
    name: category,
    value: incomeSources[category],
  }));

  const expenseData = Object.keys(expenseCategories).map(category => ({
    name: category,
    value: expenseCategories[category],
  }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4561', '#FFC260', '#72BF44', '#F28B28'];
    
    //////////////
    function displayResults() { 
      return (
        <>
          <DisplayResults
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            totalSavings={totalSavings}
            selectedCurrency={selectedCurrency}
            exchangeRatesState={exchangeRatesState}
          />
          <DashboardSummary
            incomeData={incomeData}
            expenseData={expenseData}
          />
        </>
          
        )
    }
    function displayResultsBasedOnState() {
        if (exchangeRatesState === 'LOADING') {
            console.log('laaaaaa')
            return (
                <LoadingView/>
            )
        }
        else if (exchangeRatesState === 'ERROR') {
            return (
                <ErrorView/>
            )
        }
        else {
           return displayResults() 
        }
    }
  return (
    <main className='main-bg-con'>
        <Header/>
        <div className='main-row'>
            <SideBarCompo/>
                <div className='main-con'>           
                    {displayResultsBasedOnState()}
                </div>
        </div>
    </main>
  )
}

export default Dashboard