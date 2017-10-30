import React from 'react';
import {render} from 'react-dom';
import TodoContainer from './todo/TodoContainer';

const Hello = () => {
    return (
        <TodoContainer/>
    );
};

render(<Hello/>, document.getElementById('app'));
