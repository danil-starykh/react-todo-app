import React, {Component} from 'react';

import './app-header.css';

export default class AppHeader extends Component {

    render() {

        const {countOfItems, countOfDone, onChangeTheme, whiteTheme} = this.props;

        let classNames = "fa fa-sun-o";
        document.body.style = 'background: #f7f7e8;';

        if (!whiteTheme) {
            classNames = "fa fa-moon-o";
            document.body.style = 'background: #222831;';
        }

        return (
            <div className="app-header d-flex">
                <h1>React To-Do App</h1>
                <h2>Всего задач : {countOfItems} | Сделано : {countOfDone}</h2>
                <button 
                    type="button" 
                    className="btn btn-outline-info"
                    onClick={() => onChangeTheme()}>
                    <i className={classNames}></i>
                </button>
            </div>
        )
    }
}
