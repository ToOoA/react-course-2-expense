import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense  } from './actions/expenses';
import getVisibleState from './selectors/expenses';
import { setTextFilter } from './actions/filters';

import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleState(state.expenses, state.filters);
});

const expense1 = store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
const expense2 = store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
const expense3 = store.dispatch(addExpense({description: 'rent', amount: 109500}));


const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));