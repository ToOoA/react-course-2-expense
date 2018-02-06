import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});