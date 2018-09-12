import React from 'react';
import Aux from '../../hoc/Auxx';
import Toolbar from '../Navigation/Toolbar';

import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;  