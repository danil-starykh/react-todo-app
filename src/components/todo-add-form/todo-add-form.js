import React, {Component} from 'react';

import './todo-add-form.css';

export default class ToDoAddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input 
                    className="form-control new-post-label" 
                    type="text" 
                    placeholder="Что планируете сделать?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                    required
                />
                <button
                    type="submit"
                    className="btn btn-outline-info">
                    Добавить
                </button>
            </form>
        )
    }
}
