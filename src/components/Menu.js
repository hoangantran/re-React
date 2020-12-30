import './Style.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import on from '../img/check-on.svg';
import off from '../img/check-off.svg';
import checkImg from '../img/tick.svg';
import clear from '../img/clear.svg';

// export default function Menu(props, key) {
//   var name = props.name;
//   if(props.typeName === 'start'){
//     return (
//       <ol start={ props.typeValue } key={key}>
//         {
//           props.isRender && name.map((item) => <li>{item}</li>)
//         }
//         {
//           !props.isRender && <p>Nothing here</p>
//         }
//       </ol>
//     );
//   }
//   else{
//     return (
//       <ol type={props.typeValue} key={key}>
//         {
//           props.isRender && name.map((item) => <li>{item}</li>)
//         }
//         {
//           !props.isRender && <p>Nothing here</p>
//         }
//       </ol>
//     );
//   }
// }



//export default function Menu(){
//   const [state, setState] = useState(0);
//   function change(e){
//       if(e.target.value === "+")
//         setState(state + 1);
//       else
//         setState(state - 1);
//   }

//   return(
//     <div>
//       <button onClick={change} value="+">+</button>
//       <p>{state}</p>
//       <button onClick={change} value="-">-</button>
//     </div>
//   )
// }

export default function Menu() {
  
  const data = JSON.parse(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [];
  const num = data.filter(item => item.isComplete === false);
  const [newItem, setnewItem] = useState('');
  const [count, setCount] = useState(num.length);
  const [todoList, settodoList] = useState(data);


  function randomKey() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
      for ( var i = 0; i < 15; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    return result;
  }

  function change(item){
    return() => {
      const isComplete = item.isComplete;
      const index = todoList.indexOf(item);
      const data = [
        ...todoList.slice(0, index),
        {
          ...item, isComplete: !isComplete
        },
        ...todoList.slice(index + 1)
      ]
      localStorage.setItem('todoList',JSON.stringify(data));
      settodoList(data);
      countItem();
    }
  }

  function selectAll(){
    const data = JSON.parse(localStorage.getItem('todoList'));
    var checking = data.filter(item => item.isComplete === true);
    if(checking.length === data.length){
      data.map((item)=>{
        item.isComplete = false;
        return item;
      });
      settodoList(data);
    }
    else{
      data.map((item)=>{
        item.isComplete = true;
        return item;
      });
      settodoList(data);
    }
    localStorage.setItem('todoList',JSON.stringify(data));
    countItem();
  }

  function clearAll() {
    const data = JSON.parse(localStorage.getItem('todoList'));
    const listAfterClear = data.filter(item => item.isComplete === false);
    settodoList(listAfterClear);
    countItem();
  }

  function addItem(e) {
    if(e.key === 'Enter'){
      if(e.target.value){
        todoList.push({ id: randomKey(), title: e.target.value, isComplete: false});
        localStorage.setItem('todoList',JSON.stringify(todoList));
        settodoList([
          ...todoList
        ]);
        setnewItem('');
        countItem();
      }
      else{
        return;
      } 
    }
    else{
      return;
    }
  }

  function delItem(item){
    return() => {
      const index = todoList.indexOf(item);
      const data = [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1)
      ]
      localStorage.setItem('todoList', JSON.stringify(data));
      settodoList([
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1)
      ]);
      countItem();
    }
  }

  function countItem() {
    const todosList = JSON.parse(localStorage.getItem('todoList'));
    const data = todosList.filter(item => item.isComplete === false);
    setCount(data.length);
  }

  function allList() {
    const todosList = JSON.parse(localStorage.getItem('todoList'));
    settodoList(todosList);
  }

  function activeList() {
    const todosList = JSON.parse(localStorage.getItem('todoList'));
    const data = todosList.filter(item => item.isComplete === false);
    settodoList([
      ...data
    ]);
  }

  function conpletedList() {
    const todosList = JSON.parse(localStorage.getItem('todoList'));
    const data = todosList.filter(item => item.isComplete === true);
    settodoList([
      ...data
    ]);
  }

  function onChange(e) {
    if(e.key !== 'Enter'){
      setnewItem(e.target.value);
      return;
    }
  }

  return(
    <div className="menu-super">
      <div className="menu-header">
          <img className={classNames({ hide: todoList.length <= 0 })} src={checkImg} width={30} height={30} onClick={selectAll} alt="..."/>
          <input 
            type="text" 
            placeholder="Add a new job. . ." 
            onKeyUp={addItem} value={newItem} 
            onChange={onChange}/>
      </div>
      <div className="menu-content">
        {
          todoList.map((item, key) =>
            <div className="todolist" key={key}>
              <img id="check-btn" 
                src={item.isComplete ? on : off} 
                width={32} 
                height={32} 
                onClick={change(item)} 
                alt="..."/>
              <p 
                className={ classNames('menu-item', { list: item.isComplete === true })}>
                  { item.title }
              </p>
              <img id="del-btn" src={clear} width={25} height={25} onClick={delItem(item)} alt="..."/>
            </div>
          )
        }
      </div>
      <div className={classNames('menu-footer',{ hide: data.length <= 0 })}>
        <div className="footer-title">
          <small>{count} left item</small>
        </div>
        <div className='footer-action'>
          <button onClick={allList}>All</button>
          <button onClick={activeList}>Active</button>
          <button onClick={conpletedList}>Completed</button>
          <a id="clear-btn" href="#" onClick={clearAll}>Clear Completed</a>
        </div>
      </div>
    </div>
  )
}

Menu.PropTypes = {
  newItem : PropTypes.string
}
  