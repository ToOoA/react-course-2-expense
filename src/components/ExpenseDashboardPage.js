import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFIlters from './ExpenseListFIlters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFIlters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;