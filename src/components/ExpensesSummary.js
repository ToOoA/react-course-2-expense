import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <h1>
            Viewing {
                props.expenses.length
            } expense{
                props.expenses.length > 1 && 's'
            } totalling {
                numeral(expensesTotal(props.expenses) / 100).format('$0,00.00')
            }
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);