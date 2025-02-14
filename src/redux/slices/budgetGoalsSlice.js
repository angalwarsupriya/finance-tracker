import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "2023-09": [
    {
      id: 1,
      category: 'food',
      amount: 500,
      monthlySpent: 300,
    },
    {
      id: 2,
      category: 'transport',
      amount: 200,
      monthlySpent: 100,
    },
  ],
  "2023-10": [
    {
      id: 3,
      category: 'utilities',
      amount: 150,
      monthlySpent: 75,
    },
    {
      id: 4,
      category: 'entertainment',
      amount: 100,
      monthlySpent: 50,
    },
  ],
  "2025-02": [
    {
      id: 4,
      category: 'entertainment',
      amount: 100,
      monthlySpent: 200,
    },
  ],
};

const budgetGoalsSlice = createSlice({
  name: 'budgetGoals',
  initialState,
  reducers: {
    addOrUpdateBudgetGoal: (state, action) => {
      const { monthYear, goal } = action.payload;
      if (!state[monthYear]) {
        state[monthYear] = [];
      }
      const existingGoalIndex = state[monthYear].findIndex(g => g.category === goal.category);
      if (existingGoalIndex !== -1) {
        // Update existing goal amount
        state[monthYear][existingGoalIndex].amount += goal.amount;
      } else {
        // Add new goal
        state[monthYear].push({ ...goal, id: Date.now(), monthlySpent: 0 });
      }
    },
    deleteBudgetGoal: (state, action) => {
      const { monthYear, goalId } = action.payload;
      state[monthYear] = state[monthYear].filter(goal => goal.id !== goalId);
    },
    deleteMonth: (state, action) => {
      delete state[action.payload];
    },
    updateMonthlySpent: (state, action) => {
      const { monthYear, category, amount } = action.payload;
      const goal = state[monthYear].find(goal => goal.category === category);
      if (goal) {
        goal.monthlySpent += amount;
      }
    },
  },
});

export const { addOrUpdateBudgetGoal, deleteBudgetGoal, deleteMonth, updateMonthlySpent } = budgetGoalsSlice.actions;
export default budgetGoalsSlice.reducer;
