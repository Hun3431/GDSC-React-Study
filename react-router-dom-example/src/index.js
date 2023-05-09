import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes, Link, NavLink, useParams } from 'react-router-dom';

var contents = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JavaScript', description: 'JavaScript is ...' },
  { id: 3, title: 'React', description: 'React is ...' },
]

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

/* const Topic = () => {
  var params = useParams();
  var topic_id = params.topic_id;
  console.log(contents)
  return (
    <div>
      <h3>{contents[Number(topic_id)-1].title}</h3>
      {contents[Number(topic_id)-1].description}
    </div>
  )
} */

const Topic = () => {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title: 'Sorry',
    description: '404 Not Found'
  };
  // contents 찾기
  for(var i = 0; i < contents.length; i ++) {
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

const Topics = () => {
  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path='/:topic_id' element={<Topic />} />
      </Routes>
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
        <Route path='/topics/*' element={<Topics />}></Route>
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

