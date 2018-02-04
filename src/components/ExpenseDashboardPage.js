import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFIlters from './ExpenseListFIlters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFIlters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;