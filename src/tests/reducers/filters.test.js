import moment from 'moment';
import filters from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filters(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filters(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filters(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filters(undefined, {type:'SET_TEXT_FILTER', txtFilter: 'Rent'});
    expect(state.text).toBe('Rent');
});

test('should set startDate filter', () => {
    const startDate = moment();
    const state = filters(undefined, {
        type:'SET_START_DATE', 
        startDate: startDate
    });
    expect(state.startDate).toBe(startDate);
});

test('should set startDate filter', () => {
    const endDate = moment();
    const state = filters(undefined, {
        type:'SET_END_DATE', 
        endDate: endDate
    });
    expect(state.endDate).toBe(endDate);
});