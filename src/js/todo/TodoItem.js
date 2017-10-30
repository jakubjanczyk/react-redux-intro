import * as React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({id, text, onRemove}) => {
    return (
        <li onClick={() => onRemove(id)}>{id} - {text}</li>
    )
};

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onRemove: PropTypes.func
};

TodoItem.defaultProps = {
    onRemove : () => {
    }
};

export default TodoItem