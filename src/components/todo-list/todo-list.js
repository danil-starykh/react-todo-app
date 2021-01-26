import React from 'react';
import ToDoListItem from '../todo-list-item'
import { ListGroup } from 'reactstrap';

import './todo-list.css';

const ToDoList = ({todoItems, onDelete, onToggleImportant, onToggleDone}) => {
    
    const elements = todoItems.map((item) => {
        
        const {id, ...itemProps} = item;
        
        return (
            <div>
                <li key={id} className='list-group-item'>
                <ToDoListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
                </li>
            </div>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default ToDoList;