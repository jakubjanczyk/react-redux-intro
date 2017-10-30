import * as React from 'react';
import TodoList from './TodoList';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items : [{id : 1, text : 'New todo'}]
        };
    }

    addTodo = () => {
        this.setState((prevState) => ({
            items : [...prevState.items, {id : (prevState.items[prevState.items.length - 1] || {id: 0}).id + 1, text : 'New todo'}]
        }));
    };

    removeTodo = (id) => {
        this.setState((prevState) => ({
            items : prevState.items.filter((item) => item.id !== id)
        }));
    };

    render() {
        return (
            <div>
                <TodoList items={this.state.items} onRemove={this.removeTodo}/>
                <button onClick={this.addTodo}>Add item</button>
            </div>
        )
    }
}

export default TodoContainer