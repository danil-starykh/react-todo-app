import React from 'react';

import './todo-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type='button' className='btn btn-info'>Все</button>
            <button type='button' className='btn btn-outline-secondary'>Сделано</button>
        </div>
    )
}

export default PostStatusFilter;