import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import transactionsReducer from './transactionSlices'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    transactions:transactionsReducer
  },
});
