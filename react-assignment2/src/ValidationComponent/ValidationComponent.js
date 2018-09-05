import React from 'react';
//Should drop the Component from naming
const ValidationComponent = (props) => {
    let textMessage = null;
    if (props.textLength < 5){
        textMessage = 'Text too short';
    }else{
        textMessage = 'Text long enough';
    }

    return(
        <div><p>{textMessage}</p></div>
    );
};

export default ValidationComponent;