
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function SideBarCompo() {
  return (
    <aside className="side-bar-bg-con">
      <nav className="nav-con">
        <div className="side-list-con">
          <Link to="/" className="link">Dashboard</Link>
        </div>        
        <div className="side-list-con">
          <Link to="/transactions" className="link">Transactions</Link>
        </div>
      </nav>
    </aside>
  );
}

export default SideBarCompo;
