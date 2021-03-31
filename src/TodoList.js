import React from 'react'
import Todo from './Todo'   

export default function TodoList({list}) {
    return (
        list.map(todo => {
            return <Todo key={todo.id} todo={todo}/>
        })
    )
}

