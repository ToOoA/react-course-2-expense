import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';

import { 
    removeExpense, 
    addExpense, 
    editExpense, 
    startAddExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense, 
    startEditExpense
} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'myuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    console.log(Date());
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    console.log(process.env.FIREBASE_API_KEY,process.env.FIREBASE_AUTH_DOMAIN,process.env.FIREBASE_DATABASE_URL,process.env.FIREBASE_PROJECT_ID,process.env.FIREBASE_STORAGE_BUCKET,process.env.FIREBASE_MESSAGING_SENDER_ID);
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
    console.log(Date());
});

// test('should remove expenses from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const id = expenses[0].id;
//     store.dispatch(startRemoveExpense({ id })).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'REMOVE_EXPENSE',
//             id
//         });
//         return database.ref(`users/${ uid }/expenses/${ id }`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toBeFalsy();
//         done();
//     });
// });

// test('should setup edit expense action object', () => {
//     const action = editExpense('123AZD', {note: 'test note'});
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123AZD',
//         updates: {note: 'test note'}
//     });
// });

// test('should edit expense from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const id = expenses[1].id;
//     const expense = {
//         id: '2',
//         description: 'Rent a car',
//         note: 'for vacation',
//         amount: 99900,
//         createdAt: moment(0).subtract(5, 'days').valueOf()
//     };
//     store.dispatch(startEditExpense( id, expense )).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'EDIT_EXPENSE',
//             id,
//             updates: expense
//         });
//         return database.ref(`users/${ uid }/expenses/${ id }`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual({
//             description: expense.description,
//             amount: expense.amount,
//             createdAt: expense.createdAt,
//             note: expense.note
//         });
//         done();
//     });
// });

// test('should setup add expense action object with provided values', () => {
//     const action = addExpense(expenses[2]);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: expenses[2]
//     })
// });

// test('should add expense to database and store', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'Better one',
//         createdAt: 1000
//     };
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//         return database.ref(`users/${ uid }/expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData);
//         done();
//     });
// });

// test('should add expense with default to database and store', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const expenseDefaultData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };
//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefaultData
//             }
//         });
//         return database.ref(`users/${ uid }/expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefaultData);
//         done();
//     });
// });

// test('should setup set expense action object with data', () => {
//     const action = setExpenses(expenses);
//     expect(action).toEqual({
//         type: 'SET_EXPENSES',
//         expenses
//     });
// });

// test('should fetch the expense from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     });
// });