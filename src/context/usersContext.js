import React from 'react';
import users from '../data/users';

const UsersContext = React.createContext({});

export const UsersProvider = ({ children }) => {
    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
