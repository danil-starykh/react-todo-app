import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../todo-status-filter';
import PostList from '../todo-list';
import PostAddForm from '../todo-add-form';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex"> 
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App;