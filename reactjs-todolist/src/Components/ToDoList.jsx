import React, { PureComponent } from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {  
    const myToList = props.toDoList
    return (
      <ul className='main'>
        {myToList.map((todos, todosIndex) => {
          return (
            <ToDoCard key={todosIndex} {...props} index={todosIndex}>
                <p>{todos}</p>
              </ToDoCard>
          )
        })}
      </ul>

    )
  }

