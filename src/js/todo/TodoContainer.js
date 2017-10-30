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
            items : [...prevState.items, {id : prevState.items.length + 1, text : 'New todo'}]
        }));
    };

    render() {
        return (
            <div>
                <TodoList items={this.state.items}/>
                <button onClick={this.addTodo}>Add item</button>
            </div>
        )
    }
}

export default TodoContainer