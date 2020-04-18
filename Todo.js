import React from 'react'

function Todo(props) {
    console.log(props)
    return(
        <div>
            <h3> {props.value.name}</h3>
            <input type = 'checkbox' checked = {props.value.flag} onChange = {() => props.handleChange(props.value.id)}/>
            <input type = 'text' value = {props.value.completed}/>
            <hr/>          
        </div>
    )
}

export default Todo

