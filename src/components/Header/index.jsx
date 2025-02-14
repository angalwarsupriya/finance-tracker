/*import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';

import './index.css'

function Header() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    console.log('opn')
    dispatch(openModal());
  };

  return (
    <header className=" bg-white p-4">
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold">Finance Tracker</h1>
      <button  className="create-btn hidden md:flex" onClick={handleOpenModal}>Create New</button>
   
      <div className="md:hidden">
        <button id="menu-toggle" className="text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
        
    </div>
  </header>
  )
}

export default Header*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/modalSlice';
import './index.css';

function Header() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    console.log('open');
    dispatch(openModal());
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Finance Tracker</h1>
       
        <button className="create-btn" onClick={handleOpenModal}>Create New</button>
        <div className="menu-toggle-container">
          <button id="menu-toggle" className="menu-toggle">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
