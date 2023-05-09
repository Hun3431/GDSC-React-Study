import './App.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background-color: darkgreen;
  width: 200px;
  height: 50px;
  font-size: 20px;
`;

const LargeButton = styled(SimpleButton)`
  height: 100px;
  font-size: 50px;
`;

const ReactButton = props => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size:50px;
`;

const PrimaryButton = styled.button`
  color: ${props => props.primary? 'white' : 'black' };
  background-color: ${props => props.primary? 'blue' : 'gray' };
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Nomal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
