import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Bill',
        note: 'test bill',
        amount: 4000,
        createdAt: moment(0)
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test('should edit an expense', () => {
    const expenseUpdate = {
        id: '1',
        description: 'Bill',
        note: 'test bill',
        amount: 4000,
        createdAt: moment(0)
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: expenseUpdate
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(expenseUpdate);
});

test('should not edit if id not found', () => {
    const expense = {
        id: '4',
        description: 'Bill',
        note: 'test bill',
        amount: 4000,
        createdAt: moment(0)
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        expense: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});