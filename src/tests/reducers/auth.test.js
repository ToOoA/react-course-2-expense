import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action =  {
        type: 'LOGIN',
        uid: '3PfRWd2OBOTbSBFuy82sR22PFim2'
    }
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: action.uid
    })
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: '3PfRWd2OBOTbSBFuy82sR22PFim2'}, action);
    expect(state).toEqual({});
});