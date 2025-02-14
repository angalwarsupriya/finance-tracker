
import { addOrUpdateBudgetGoal, deleteBudgetGoal, deleteMonth, updateMonthlySpent} from '../../redux/slices/budgetGoalsSlice';

import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import './index.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header'
import SideBarCompo from '../SideBarCompo'

const expenseCategories = [
  'food', 'transport', 'entertainment', 'utilities', 'health',
  'shopping','housing', 'education', 'other',
];

const BudgetGoals = () => {
  const budgetGoals = useSelector(state => state.budgetGoals) || {}; // Access budget goals directly
  const transactions = useSelector(state => state.transactions);
  console.log(transactions,'hhhhhhhhhhhhh')
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ category: '', amount: '', monthYear: format(new Date(), 'yyyy-MM') });
  const currentMonthYear = format(new Date(), 'yyyy-MM');

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    dispatch(addOrUpdateBudgetGoal({ monthYear: formData.monthYear, goal: { category: formData.category, amount: +formData.amount } }));
    setFormData({ category: '', amount: '', monthYear: format(new Date(), 'yyyy-MM') });
  };

  const handleDelete = (monthYear, goalId) => {
    dispatch(deleteBudgetGoal({ monthYear, goalId }));
  };

  const handleDeleteMonth = (monthYear) => {
    dispatch(deleteMonth(monthYear));
  };

  const calculateMonthlySpent = (category, monthYear, transaction) => {
    
    return transaction
      .filter(transaction => transaction.category == category && transaction.monthYear == monthYear)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  };
  
  const getFeedback = (goal, monthlySpent) => {
    const percentageSpent = (monthlySpent / goal.amount) * 100;
    if (percentageSpent < 50) {
      return 'You are on track with your budget.';
    } else if (percentageSpent < 100) {
      return 'Warning: You are nearing your budget limit.';
    } else {
      return 'Alert: You have exceeded your budget!';
    }
  };

  return (
    <div className='budget-bg-con'>
      <Header/>
      <div className='budget-row'>
        <SideBarCompo/>
        <div className='budget-con'>
        <h2>Budget Goals</h2>
          <div className='form-row'>
            
          <form onSubmit={handleAddOrUpdate} className="budget-goal-form">
            <select
               value={formData.category}
               onChange={(e) => setFormData({ ...formData, category: e.target.value })}
               className="block w-full p-2 border rounded"
             >
               {expenseCategories.map((category) => (
                 <option key={category} value={category}>{category}</option>
               ))}
             </select>
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
        <input
          type="month"
          value={formData.monthYear}
          onChange={(e) => setFormData({ ...formData, monthYear: e.target.value })}
          required
        />
        <button type="submit">Add or Update Goal</button>
            </form>
            <div className='gols-img-con'>
              <img src='/images/img.png' alt='img' className='img'/>
            </div>
          </div>
          
      {Object.keys(budgetGoals).map(monthYear => (
        <div key={monthYear} className="month-budget-goals">
          <h3>{monthYear}</h3>
          {monthYear !== currentMonthYear && (
            <button onClick={() => handleDeleteMonth(monthYear)} className="delete-month-btn">Delete Month</button>
          )}
          <ul className="budget-goals-list">
            {budgetGoals[monthYear].map(goal => {
              const monthlySpent = calculateMonthlySpent(goal.category, monthYear,transactions);
              return (
                <li key={goal.id} className="budget-goal-item">
                  <span className='span1'>{goal.category}:   <span className='span'>Budget:   </span> ${goal.amount}, <span className='span'>  Spent:   $</span>{monthlySpent}</span>
                  <span className='span2'>{getFeedback(goal, monthlySpent)}</span>
                  {monthYear === currentMonthYear && (
                    <button onClick={() => handleDelete(monthYear, goal.id)} className='dlt-btn'>Delete</button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      </div>
      </div>
      </div>
  );
};

export default BudgetGoals;
