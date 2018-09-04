import React from 'react';

const userInput = (props) => {
    return (
        <div className={props.style}>
            <input type="text" onChange={props.change} value={props.userName} style={props.style}/>
        </div>
    );
};

export default userInput;