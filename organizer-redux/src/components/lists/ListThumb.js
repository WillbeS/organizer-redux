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
        <button onClick={props.deleteHandler}>[Delete]</button>
        {/* [<Link to={'/list/edit/' + props.list._id}>Edit</Link>] 
        [<Link to={'/list/delete/' + props.list._id}>Delete</Link>] */}
    </div>
);

export default ListThumb;