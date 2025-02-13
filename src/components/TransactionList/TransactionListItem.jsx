import React from 'react';
import './index.css';
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";

function TransactionListItem(props) {
  const { handleDelete, handleEdit, transaction } = props;
  console.log(handleDelete);

  return (
    <li key={transaction.id} className="transaction-item">
      <div className='list-left-con'>
        <div className='img-con'>
          <img src={`/images/${transaction.category}.png`} className='list-img' alt={`${transaction.category}`} />
        </div>
        <div className='des-con'>
          <p className='list-des'>{transaction.description}</p>
          <p className='list-cate'>{transaction.category}</p>
        </div>
        <div className='list-middle-con'>
          <p className='amount-p'>{transaction.originalAmount}</p>
          <p className='currency-p'>{transaction.originalCurrency}</p>
        </div>
      </div>

      <div className='list-right-con'>
        <button className='icons-btn' onClick={() => handleDelete(transaction.id)}>
          <ImBin className='list-icon' />
        </button>
        <button className='icons-btn' onClick={() => handleEdit(transaction)}>
          <FaRegEdit className='list-icon' />
        </button>
      </div>
    </li>
  );
}

export default TransactionListItem;
