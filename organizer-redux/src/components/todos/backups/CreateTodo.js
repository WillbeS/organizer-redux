import React from 'react';
import TodoForm from '../TodoForm';

const CreateTodo = (props) => {
    return(
        <div>
            <h2>Create Todo</h2>
            <TodoForm
                todo={props.todo}
                onChange={props.onChange}
                submitValue='Add'
                onSubmit={props.onSubmit}
                error={props.error} />
        </div>
    );
}

export default CreateTodo;