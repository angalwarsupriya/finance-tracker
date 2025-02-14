import React from 'react'
import './index.css'

function LoadingView() {
  return (
    <div className='loadind-con' style={{ height: "100%", width: '100%', display: 'flex', alignItems: "center", justifyContent: "center" }}>
        <p style={{fontSize:'20px'}}>Loading</p>
    </div>
  )
}

export default LoadingView