import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyButton(){
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app form ThiDK</h1>
      <MyButton/>
    </div>
  );
}
