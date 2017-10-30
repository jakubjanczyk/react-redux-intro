import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import TodoContainer from './todo/TodoContainer';
import {createStore} from 'redux';
import todos from './reducers';

let store = createStore(todos);

const Hello = () => {
    return (
        <Provider store={store}>
            <TodoContainer/>
        </Provider>
    );
};

render(<Hello/>, document.getElementById('app'));
