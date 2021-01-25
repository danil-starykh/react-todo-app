import React, {Component} from 'react';

import './todo-list-item.css';

export default class ToDoListItem extends Component {

    render() {

        const {label, onDelete, onToggleImportant, onToggleDone, important, done} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }

        if (done) {
            classNames += " done";
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={onToggleDone}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-check"></i>
                </div>
            </div>
        )
    }
}
