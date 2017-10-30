import * as React from 'react';
import TodoList from './TodoList';

const TodoContainer = () => {
    return (
        <div>
            <TodoList items={[{id : 1, text : 'New todo'}]}/>
        </div>
    )
};

export default TodoContainer