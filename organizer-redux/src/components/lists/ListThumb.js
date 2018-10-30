import React from 'react';
import './ListThumb.css';
//import { Link } from 'react-router-dom';

const ListThumb = (props) => (
    <div className='list-thumb'>
        <h2>{props.list.name}</h2>
        <p>
            <span>Total:</span> 6<br />
            <span>Today:</span> 3<br />
            <span>Active:</span> 2<br />
            <span>Completed:</span> 1<br />
        </p>
        <button onClick={(event) => (props.editHandler(event, props.list))}>[Edit]</button> 
        <button onClick={(event) => (props.deleteHandler(event, props.list._id))}>[Delete]</button>
    </div>
);

export default ListThumb;