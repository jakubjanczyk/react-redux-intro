import * as React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {removeTodo} from '../actions';

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

const mapDispatchToProps = {
    onRemove: removeTodo
};

export default connect(null, mapDispatchToProps)(TodoItem)