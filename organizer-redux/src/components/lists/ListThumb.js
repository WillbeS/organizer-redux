import React from 'react';
import './ListThumb.css';
//import { Link } from 'react-router-dom';
import {Link} from 'react-router-dom';

const ListThumb = (props) => (
    <div className='list-thumb'>
        <h2>{props.list.name}</h2>
        <Link className='btn btn-info' to={'/list/view/' + props.list._id}>View Details</Link>
        <button onClick={(event) => (props.editHandler(event, props.list))}>[Edit]</button> 
        {/* <button onClick={(event) => (props.deleteHandler(event, props.list._id))}>[Delete]</button> */}
    </div>
);

export default ListThumb;