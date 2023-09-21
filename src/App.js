import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';
import data from './data';





function App() {

  const [things, setThings] = useState (data);

  return ( 
    <>
    <main>
      <section className='container'>
        <h3> {things.length}Things To Do Today</h3>
        <List things={things}></List>
        <button className='btn' onClick={()=>setThings([])}>
          clear all
        </button>

      </section>
    </main>
    </>
  );
}

export default App;
