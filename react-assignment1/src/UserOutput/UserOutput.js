import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>First Paragraph Username = {props.userName}</p>
            <p>Second Paragrapgh</p>
        </div>
    );
};
export default userOutput;