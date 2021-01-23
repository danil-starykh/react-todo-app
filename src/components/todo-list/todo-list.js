import React from 'react';
import PostListItem from '../todo-list-item'

import './todo-list.css';

const PostList = ({todoItems}) => {
    
    const elements = todoItems.map((item) => {
        
        const {id, ...itemProps} = item;
        
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;