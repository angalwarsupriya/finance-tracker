import { createSlice } from '@reduxjs/toolkit';
import { updateMonthlySpent } from './budgetGoalsSlice';
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState :[
    {
      id: 1,
      description: 'Salary',
      amount: 5000,
      originalAmount: 5000,
      originalCurrency: 'USD',
      type: 'income',
      category: 'salary',
      baseCurrency: 'USD',
    },
    {
      id: 2,
      description: 'Gift',
      amount: 10000,
      originalAmount: 10000,
      originalCurrency: 'USD',
      type: 'income',
      category: 'gift',
      baseCurrency: 'USD',
    },
    {
      id: 2,
      description: 'Gift',
      amount: 4000,
      originalAmount: 4000,
      originalCurrency: 'USD',
      type: 'income',
      category: 'other',
      baseCurrency: 'USD',
    },

    
    {
      id: 4,
      description: 'Freelance Project',
      amount: 800,
      originalAmount: 800,
      originalCurrency: 'USD',
      type: 'income',
      category: 'freelance',
      baseCurrency: 'USD',
    },
    {
      id: 5,
      description: 'Electricity Bill',
      amount: 100,
      originalAmount: 100,
      originalCurrency: 'GBP',
      type: 'expense',
      category: 'utilities',
      baseCurrency: 'USD',
    },
    {
      id: 6,
      description: 'Investment Return',
      amount: 4500,
      originalAmount: 4500,
      originalCurrency: 'JPY',
      type: 'income',
      category: 'investment',
      baseCurrency: 'USD',
    },
    {
      id: 7,
      description: 'Dining Out',
      amount: 80,
      originalAmount: 80,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'entertainment',
      baseCurrency: 'USD',
    },
    {
      id: 8,
      description: 'Public Transport',
      amount: 50,
      originalAmount: 50,
      originalCurrency: 'EUR',
      type: 'expense',
      category: 'transport',
      baseCurrency: 'USD',
    },
    {
      id: 9,
      description: 'Gym Membership',
      amount: 40,
      originalAmount: 40,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'health',
      baseCurrency: 'USD',
    },
    {
      id: 10,
      description: 'Books',
      amount: 200,
      originalAmount: 200,
      originalCurrency: 'INR',
      type: 'expense',
      category: 'education',
      baseCurrency: 'USD',
    },
    {
      id: 11,
      description: 'Stock Dividends',
      amount: 250,
      originalAmount: 250,
      originalCurrency: 'GBP',
      type: 'income',
      category: 'investment',
      baseCurrency: 'USD',
    },
    {
      id: 12,
      description: 'Medical Checkup',
      amount: 100,
      originalAmount: 100,
      originalCurrency: 'JPY',
      type: 'expense',
      category: 'health',
      baseCurrency: 'USD',
    },
    {
      id: 13,
      description: 'Grocery shopping',
      amount: 800,
      originalAmount: 800,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'food',
      baseCurrency: 'USD',
      date: '2025-02-05',
    },
    {
      id: 14,
      description: 'Monthly Rent',
      amount: 1200,
      originalAmount: 1200,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'housing',
      baseCurrency: 'USD',
      date: '2023-09-01',
    },
  ]
    ,
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        ...action.payload,
        date: new Date().toISOString().split('T')[0],
        monthYear: new Date().toISOString().split('T')[0].slice(0, 7), // Add month and year
      };
      state.unshift(newTransaction);
    },
    deleteTransaction: (state, action) => {
      return state.filter(transaction => transaction.id !== action.payload);
    },
    updateTransaction: (state, action) => {
      const index = state.findIndex(transaction => transaction.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTransaction, deleteTransaction, updateTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
