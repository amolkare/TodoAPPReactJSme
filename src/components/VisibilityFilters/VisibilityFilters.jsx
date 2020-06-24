import React from 'react';
import './VisibilityFilters.css';

class VisibilityFilters extends React.Component{

    handleFilter=(filter)=>{
        this.props.checkVisibilityHandler(filter);
    }

    render(){
        return(
            <div className="filter-container">
                <ul className="nav">
                    <li className="nav-item"><a className="nav-link" onClick={()=>this.handleFilter("all")}>All</a></li>
                    <li className="nav-item"><a className="nav-link" onClick={()=>this.handleFilter("completed")}>Completed</a></li>
                    <li className="nav-item"><a className="nav-link" onClick={()=>this.handleFilter("incomplete")}>Incomplete</a></li>
                </ul>
            </div>
        )
    }
}
export default VisibilityFilters;