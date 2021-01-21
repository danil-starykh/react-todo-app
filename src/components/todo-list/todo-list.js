import React from 'react';
import PostListItem from '../todo-list-item'

import './todo-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList;