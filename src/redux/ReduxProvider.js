'use client'
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { useSession } from 'next-auth/react';
import { userError, userRequest, userSuccess } from './features/auth/authSlice';
import AnotherProvider from './AnotherProvider';

const ReduxProvider = ({children}) => {

    return (
        <Provider store={store}>
            <AnotherProvider>
                {children}
            </AnotherProvider>
        </Provider>
    );
};

export default ReduxProvider;