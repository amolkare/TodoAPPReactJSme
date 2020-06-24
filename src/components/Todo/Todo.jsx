import React from 'react';

import './Todo.css';

class Todo extends React.Component{
    handleTodo=()=>{
        debugger;
        this.props.onClickTodo(this.props.id);
    }
    handleDelete=()=>{
        this.props.deleteTodo(this.props.id);
    }
    render(){
        let isCompleteClass = '';
        if(this.props.todo.completed){
            isCompleteClass="completed list-group-item"
        }else{
            isCompleteClass='list-group-item';
        }
        return(
            <li className={isCompleteClass}>
                <span onClick={this.handleTodo}>{this.props.todo.task}</span>
                <span className="delete fa fa-trash" onClick={this.handleDelete}></span>
            </li>
        )
    }
}

export default Todo;