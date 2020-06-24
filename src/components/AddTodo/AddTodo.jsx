import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component{
    constructor(){
        super();
        this.state={
            task:''
        }
    }
    addTodo =()=>{
        this.props.clickHandler(this.state.task);
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <div className="addtodo-container form-group">
                <input type="text" name="task" onChange={this.handleChange}/>&nbsp;&nbsp;
                <button className="btn btn-secondary" onClick={this.addTodo}>
                    <span className="fa fa-plus"></span>
                </button>
            </div>
        )
    }
}

export default AddTodo;