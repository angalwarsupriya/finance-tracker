
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
//import icons 
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTransaction } from "react-icons/ai";

function SideBarCompo() {
  const pathName = window.location.pathname
  const styles = {backgroundColor:"red"}
  return (
    <aside className="side-bar-bg-con">
      <nav className="nav-con">
        <div className="side-list-con" style={{backgroundColor: pathName === '/' ? 'rgb(189, 189, 250)' :''}}>
          <RxDashboard className='side-icon ii' style={{color : pathName === '/' ? "#1337b9" : 'gray'}}></RxDashboard>
          <Link to="/" className="link" style={{ color: pathName === '/' ? "rgb(14, 3, 220)" : 'gray' }}>Dashboard</Link>
        </div>        
        <div className="side-list-con" style={{backgroundColor: pathName === '/transactions' ? 'rgb(189, 189, 250)' :''}}>
          <AiOutlineTransaction className='side-icon' style={{color : pathName === '/transactions' ? "#1337b9" : 'gray'}}></AiOutlineTransaction>
          <Link to="/transactions" className="link" style={{ color: pathName === '/transactions' ? "rgb(14, 3, 220)" : 'gray' }}>Transactions</Link>
        </div>
        <div className="side-list-con" style={{backgroundColor: pathName === '/budget' ? 'rgb(189, 189, 250)' :''}}>
          <AiOutlineTransaction className='side-icon' style={{color : pathName === '/budget' ? "#1337b9" : 'gray'}}></AiOutlineTransaction>
          <Link to="/budget" className="link" style={{ color: pathName === '/budget' ? "rgb(14, 3, 220)" : 'gray' }}>Budget</Link>
        </div>
      </nav>
    </aside>
  );
}

export default SideBarCompo;
