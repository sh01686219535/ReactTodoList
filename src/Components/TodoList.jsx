import React from 'react'

export default function TodoList({deleteListItem,index,item}) {
  return (
    <div>
        <li className="list-item">
          {item}
            <span className='icons'><i className="fa-solid fa-trash-can icon-delete" onClick={()=>{
              deleteListItem(index)
            }}></i></span>
        </li>
    </div>
  )
}
