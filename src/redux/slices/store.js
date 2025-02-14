import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import transactionsReducer from './transactionSlices'
import budgetGoalsReducer from './budgetGoalsSlice'; // Import the budgetGoalsSlice

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    transactions: transactionsReducer,
    budgetGoals: budgetGoalsReducer, // Add the budgetGoals reducer
  },
});
