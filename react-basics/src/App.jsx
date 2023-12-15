import { useState } from 'react';
import { ColorfulMessage } from './conponents/ColorfulMessage';

function App() {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // ←複数行同じ処理しても適用される
    setNum(num + 1); // ←複数行記述してもnumの値は1回のみ
  };
  return (
    <>
      <h1 style={{ color: "lightcoral" }}>Hello</h1>
      <ColorfulMessage color="lightskyblue">What's up?</ColorfulMessage>
      <ColorfulMessage color="lightgreen">Awsome!</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <p>{num}</p>
    </>
  );
}

export default App;
