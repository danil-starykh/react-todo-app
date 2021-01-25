import React, {Component} from 'react';

import './todo-status-filter.css';

export default class ToDoStatusFilter extends Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', lable: 'Все'},
            {name: 'done', lable: 'Сделано'}
        ]
    }
    
    render() {

        const buttons = this.buttons.map(({name, lable}) => {
            const active = this.props.filter === name;
            const btnClass = active ? 'btn btn-info' : 'btn btn-outline-secondary'
            return (
                <button 
                    key={name} 
                    type='button' 
                    className={btnClass}
                    onClick={() => this.props.onFilterSelect(name)}>
                    {lable}
                </button>
            )
        })

        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
}

