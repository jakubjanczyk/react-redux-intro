import * as React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({id, text}) => {
    return (
        <li>{id} - {text}</li>
    )
};

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem