
import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction, updateTransaction } from '../../redux/slices/transactionSlices';
import TransactionListItem from './TransactionListItem';
import EmptyListView from './EmptyListView';

import Header from '../Header';
import SideBarCompo from '../SideBarCompo';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const handleEdit = (transaction) => {
    const updatedTransaction = { ...transaction, description: 'Updated Description' }; // Edit details as needed
    dispatch(updateTransaction(updatedTransaction));
  };

  const displayListView = () => {
    if (transactions.length > 0) {
      return (
        <ul className="transaction-list">
          {transactions.map(transaction => (
            <TransactionListItem
              key={transaction.id}
              transaction={transaction}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      );
    } else {
      return <EmptyListView />;
    }
  };

  return (
    <div className='transaction-bg-con'>
      <Header/>
      <div className='trasaction-row'>
        <SideBarCompo/>
        <div className='transaction-con'>
          <h2 className="transactions-h">Transaction List</h2>
          {displayListView()} 
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
