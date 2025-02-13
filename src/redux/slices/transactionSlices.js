import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [
    {
      id: 1,
      description: 'salary',
      amount: 5000,
      originalAmount: 5000,
      originalCurrency: 'USD',
      type: 'income',
      category: 'salary',
      baseCurrency: 'USD',
    },
    {
      id: 2,
      description: 'rent',
      amount: 1500,
      originalAmount: 1500,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'utilities',
      baseCurrency: 'USD',
    },
    {
      id: 3,
      description: 'groceries',
      amount: 300,
      originalAmount: 300,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'Food',
      baseCurrency: 'USD',
    },
    {
      id: 4,
      description: 'freelance',
      amount: 800,
      originalAmount: 800,
      originalCurrency: 'USD',
      type: 'income',
      category: 'salary',
      baseCurrency: 'USD',
    },
    {
      id: 5,
      description: 'electricity bill',
      amount: 100,
      originalAmount: 100,
      originalCurrency: 'USD',
      type: 'expense',
      category: 'utilities',
      baseCurrency: 'USD',
    },
  ],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
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
