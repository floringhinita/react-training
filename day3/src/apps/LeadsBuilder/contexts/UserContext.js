import React, {createContext, useContext, useReducer} from 'react'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: 'aaaa'
};

const reducer = (currentState, {type, payload}) => {
    switch (type) {
        case 'user.set':
            return {...currentState, ...payload}
        default:
            return currentState
    }
};

const UserStateContext = createContext(initialState);
const UserDispatchContext = createContext(null);

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

const useUserState = () => {
    const context = useContext(UserStateContext)

    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider')
    }
    return context
}

const useUserDispatch = () => {
    const context = useContext(UserDispatchContext)

    if (context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider')
    }
    return context
}

export {
    useUserState,
    useUserDispatch,
    UserProvider
}