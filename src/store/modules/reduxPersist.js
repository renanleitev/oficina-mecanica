import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reduxPersist = (reducers) => {
    const persistedReducers = persistReducer({
        key: 'react-base',
        storage,
        whitelist: ['users', 'products', 'employees'],
    }, reducers);
    return persistedReducers;
};

export default reduxPersist;