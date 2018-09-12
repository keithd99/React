import React from 'react';

import classes from './Logo.css';

//Import for WebPack
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="My Buger"></img>
    </div>
);
export default logo; 