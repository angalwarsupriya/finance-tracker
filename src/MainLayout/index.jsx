import React from 'react';

import './index.css'; // Add your styles here

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
        <main className="main-content">
          {children}
        </main>
    </div>
  );
};

export default MainLayout;
