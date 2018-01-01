import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    console.log('area of form submission',props)
    switch ( props.inputtype ) {
        case( 'input' ):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;