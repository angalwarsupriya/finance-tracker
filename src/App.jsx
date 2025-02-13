import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
//import MainLayout from './MainLayout';
import TransactionList from './components/TransactionList';
//import TransactionForm from './components/TransactionForm';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/transactions" element={<TransactionList/>} />
      </Routes>
    </Router>
  );
};

export default App;