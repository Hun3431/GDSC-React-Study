import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

const App = () => {
  return (
      <div>
        <h1>React Router example</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/topics'>Topics</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}></Route> 
          <Route path='/topics' element={<Topics />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/*' element={'Not Found'}></Route>
        </Routes>
      </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

