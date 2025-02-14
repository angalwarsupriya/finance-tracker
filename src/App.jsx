import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
//import MainLayout from './MainLayout';
import TransactionList from './components/TransactionList';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import MainLayout from './MainLayout';


const App = () => {
  return (
    <Router>
      <MainLayout>
        <TransactionForm/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path="/transactions" element={<TransactionList/>} />
      </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;