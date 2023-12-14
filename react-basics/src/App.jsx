import './App.css';
import { ColorfulMessage } from './conponents/ColorfulMessage';

function App() {
  const onClickBtn = () => alert();
  return (
    <>
      <h1 style={{ color: "lightcoral" }}>Hello</h1>
      <ColorfulMessage color="lightskyblue">What's up?</ColorfulMessage>
      <ColorfulMessage color="lightgreen">Awsome!</ColorfulMessage>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
}

export default App;
