import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../todo-status-filter';
import PostList from '../todo-list';
import PostAddForm from '../todo-add-form';

import './app.css';

const App = () => {

    const data = [
        {
            label: "Close a window",
            important: true
        },
        {
            label: "Finish work",
            important: false
        },
        {
            label: "Call Adam",
            important: false
        }
    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex"> 
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList todoItems={data}/>
            <PostAddForm />
        </div>
    )
}

export default App;