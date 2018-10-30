import React from 'react';
import ListThumb from './ListThumb';

const ShowAllLists = (props) => {
    const data = props.data;
    let listItems = Object.keys(data).map(key => (
        <ListThumb 
            key={key} 
            list={data[key]} 
            editHandler={props.editHandler}
            deleteHandler={props.deleteHandler} />
    ));

    //console.log('Render ShowAllLists');
    return (
        <div>
            {listItems}
        </div>
    );
}

export default ShowAllLists;