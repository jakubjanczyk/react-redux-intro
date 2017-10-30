import * as React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

const TodoList = ({items, onRemove}) => {
    return (
        <ul>
            {items.map(item => <TodoItem key={item.id} id={item.id} text={item.text} onRemove={onRemove}/>)}
        </ul>
    )
};

TodoList.propTypes = {
    items : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            text : PropTypes.string.isRequired
        })
    ).isRequired
};

export default TodoList