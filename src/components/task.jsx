import React, {Fragment} from 'react';

const Task = (props) =>{
        const classInput = `todo_list_input todo_list_input-${props.className}`;
        const classButton = `todo_list_button todo_list_button-${props.className}`;
        return (
            <Fragment>
                <input className={classInput} placeholder={props.placeholder} value={props.value} onChange={props.onChange} name={props.name} readOnly={props.readOnly}/>
                <button className={classButton} type='button' value='remove' onClick={props.onClick}>{props.buttonText}</button>
            </Fragment>
        )
}

export default Task;