
import React, { useState,useEffect } from 'react';
import './index.css';
// redux functions
import { useDispatch, useSelector } from 'react-redux';
// importing modal redux actions
import { addTransaction } from '../../redux/slices/transactionSlices';
import { closeModal } from '../../redux/slices/modalSlice';

// importing exchangeRates function 
import useExchangeRates from '../../redux/useExchangeRates';

const incomeSources = [
  'salary', 'freelance', 'investment', 'gift', 'other',
];

const expenseCategories = [
  'food', 'transport', 'entertainment', 'utilities', 'health',
  'shopping','housing', 'education', 'other',
];

const TransactionForm = () => {
  const [formData, setFormData] = useState({ description: '', amount: '', category: '', type: 'income', currency: 'USD' });
  const dispatch = useDispatch();
  const { exchangeRatesState, errorMsg } = useExchangeRates();
  const showModal = useSelector((state) => state.modal.showModal);
  useEffect(() => {
    // Set default category based on type
    if (formData.type === 'income' && formData.category === '') {
      setFormData({ ...formData, category: incomeSources[0] });
    } else if (formData.type === 'expense' && formData.category === '') {
      setFormData({ ...formData, category: expenseCategories[0] });
    }
  }, [formData.type]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData,';;;;;;')
    if (exchangeRatesState) {
      const baseCurrency = 'USD';
      const rate = exchangeRatesState.conversion_rates[formData.currency];
      const amountInBaseCurrency = formData.amount / rate;
      const monthYear = new Date().toISOString().split('T')[0].slice(0, 7);

      dispatch(addTransaction({
        ...formData,
        amount: amountInBaseCurrency,
        originalAmount: formData.amount,
        originalCurrency: formData.currency,
        id: Date.now(),
        baseCurrency,
        monthYear, // Include month and year
      }));
      setFormData({ description: '', amount: '', category: '', type: 'income', currency: 'USD' });
      dispatch(closeModal());
    }
  };

  const getCategoryOptions = () => {
    if (formData.type === 'income') {
      return incomeSources;
    } else if (formData.type === 'expense') {
      return expenseCategories;
    }
    return [];
  };

  if (exchangeRatesState === 'LOADING') {
    return <div>Loading exchange rates...</div>;
  }

  if (exchangeRatesState === 'ERROR') {
    return <div>Error fetching exchange rates: {errorMsg}</div>;
  }

  const display = showModal ? '' : 'none';

  return (
    <div className="modal-overlay" style={{ display }}>
      <div className="modal-container">
        <div className="modal-content">
          <h1 className="form-h">Create Transaction</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="block w-full p-2 border rounded"
              required
              minLength="5"
              maxLength='18'
            />
            <input
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
              className="block w-full p-2 border rounded"
              min={1}
              required
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="block w-full p-2 border rounded"
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
              <option value="saving">Saving</option>
            </select>
            {formData.type !== 'saving' && (
              <select
               value={formData.category}
               onChange={(e) => setFormData({ ...formData, category: e.target.value })}
               className="block w-full p-2 border rounded"
             >
               {getCategoryOptions().map((category) => (
                 <option key={category} value={category}>{category}</option>
               ))}
             </select>
            )}
            <select
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
              className="block w-full p-2 border rounded"
            >
              {exchangeRatesState && Object.keys(exchangeRatesState.conversion_rates).map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
            
            <button type="submit" className="submit-btn">Add Transaction</button>
          </form>
          <button onClick={() => dispatch(closeModal())} className="close-modal">Close</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
