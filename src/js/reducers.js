import {combineReducers} from 'redux';

const todos = (state = [{id : 0, text : 'New todo'}], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id : action.id, text : action.text}];
        case 'REMOVE_TODO':
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
};

export default combineReducers({
    todos
})