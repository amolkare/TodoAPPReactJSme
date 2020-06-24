import React from 'react';
import './TodoList.css'
import Todo from '../Todo/Todo';

class TodoList extends React.Component{
    constructor(){
        super();
    }
    handleSingleTodo=(key)=>{
        this.props.onClickTodoCall(key);
    }
    handleDelete=(key)=>{
        this.props.onClickDelete(key);
    }
    render(){
        return(
            <div className="todolist-container">
                <ul className="todo-list list-group">
                {
                    this.props.todos.map((todo,i)=>
                        <Todo todo={todo} id={i} onClickTodo={this.handleSingleTodo} deleteTodo={this.handleDelete}/>
                    )
                }
                </ul>
            </div>
        );
    }
}

export default TodoList;