import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "todo1",
    "todo2"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "todoでした1",
    "todoでした2"
  ])
  return (
    <>
      <div className='input-area'>
        <input type="text" placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
