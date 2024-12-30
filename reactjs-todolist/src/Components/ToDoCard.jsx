import React, { useState } from 'react'

export default function ToDoCard(props) {
  const { children, handleDeleteList,index,handleEditList } = props
  
  return (
    <li className="todoItem">
      {children}
      <div className='actionsContainer'>
        <button>
        <i className='fa-solid fa-pen-to-square' onClick={() => handleEditList(index)}></i>
        </button>
        <button>
          <i className='fa-solid fa-trash' onClick={() => handleDeleteList(index)}></i>
        </button>
      </div>
    </li>
  )
}
