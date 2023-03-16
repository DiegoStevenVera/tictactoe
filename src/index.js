import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header'
import Board from './components/board/board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='Content'>
    <Header />
    <Board />
  </div>
);
