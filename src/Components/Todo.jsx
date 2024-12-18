import { useState } from 'react';
import '../App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
export default function Todo() {
    const [listTodo,setListodo] = useState([]);

 const adList = (inputText)=>{
    if(inputText !== ''){
        setListodo([...listTodo,inputText])
    }
 }
 const deleteListItem = (index)=>{
    let newListItem = [...listTodo];
    newListItem.splice(index,1);
    setListodo(newListItem)
 }
  return (
    <div>
        <div className="container-main">
        <TodoInput adList={adList}/>
        {listTodo.map((listItem,i)=>{
            return (
                <TodoList key={i} item={listItem} index={i} deleteListItem={deleteListItem}/>
            )
        })}
      
        </div>
    </div>
  )
}
