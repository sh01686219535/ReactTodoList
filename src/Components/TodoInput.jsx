import React, { useState } from 'react'

export default function TodoInput({adList}) {
    const [inputText,setInputText] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        adList(inputText);
        setInputText('');
    };
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Your Todo' className='todo-input'
            onChange={(e)=>{
                setInputText(e.target.value)
            }}
            value={inputText}
            />
            <button className='add-btn' onClick={handleClick}>+</button>
        </form>
    </div>
  )
}
