import * as React from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const TodoContainer = (props) => {
    return (
        <div>
            <TodoList/>
            <button onClick={() => props.addTodo(Math.ceil(Math.random() * 2000), 'New todo')}>Add item</button>
        </div>
    );
};

const mapDispatchToProps = ({
    addTodo
});

export default connect(null, mapDispatchToProps)(TodoContainer)