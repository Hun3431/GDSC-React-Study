import './App.css';
import { useState } from 'react';

// 사용자 정의 태그 = 컴포넌트 
// 반드시 대문자로 시작!
const Header = (props) => {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>

}

const Nav = (props) => {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

const Article = (props) => {
  return <article>
    <h2>{props.title}.</h2>
    {props.body}  
  </article>
}


function App() {
  const [mode, setMode] = useState('Welcome');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title: 'html', body: 'html is ...'},
    {id:2, title: 'css', body: 'css is ...'},
    {id:3, title: 'javascript', body: 'javascript is ...'}
  ]

  let content = null;
  if(mode === 'Welcome') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'Read') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="Web" onChangeMode={() => {
        setMode('Welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('Read');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;