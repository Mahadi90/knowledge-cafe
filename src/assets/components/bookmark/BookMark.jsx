import React from 'react';
import './BookMark.css'

const BookMark = ({title}) => {
    return (
        <div className='title'>
            <h4>{title}</h4>
        </div>
    );
};

export default BookMark;