import {combineReducers} from "redux";
import {usersReducer} from './users';
// import {employeesReducer} from './employees';
// import {productsReducer} from './products';

const rootReducer = combineReducers({
    users: usersReducer,
    // employees: employeesReducer,
    // products: productsReducer,
});

export default rootReducer;