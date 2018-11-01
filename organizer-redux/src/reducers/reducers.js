import { authReducer } from './authReducer';
import { listReducer } from './listReducer';
import { todoReducer } from './todoReducer';

export default {
    auth: authReducer,
    list: listReducer,
    todo: todoReducer
};