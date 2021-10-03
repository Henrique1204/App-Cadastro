import React from 'react';
import users from '../data/users';

const UsersContext = React.createContext({});

export const usersActions = {
    DELETE_USER: 'DELETE_USER',
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case usersActions.DELETE_USER:
            const usersFilter = state.users.filter(({ id }) => payload.id !== id);
            return { ...state, users: usersFilter };
        default:
            return state;
    }
};

const initialState = { users };

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
