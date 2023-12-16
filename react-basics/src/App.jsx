import { useEffect, useState } from 'react';
import { ColorfulMessage } from './conponents/ColorfulMessage';

function App() {
  console.log('--App--');
  const [num, setNum] = useState(0);
  const [isShowCat, setIsShowCat] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // ←複数行同じ処理しても適用される
    setNum(num + 1); // ←複数行記述してもnumの値は1回のみ
  };
  const onClickToggle = () => {
    setIsShowCat(!isShowCat);
  };


  useEffect(() => {
    console.log("--useEffect--")
    if (num > 0) {
      if (num % 3 === 0) {
        isShowCat || setIsShowCat(true);
      } else {
        isShowCat && setIsShowCat(false);
      }  
    }  
  }, [num]);

  return (
    <>
      <h1 style={{ color: "lightcoral" }}>Hello</h1>
      <ColorfulMessage color="lightskyblue">What's up?</ColorfulMessage>
      <ColorfulMessage color="lightgreen">Awsome!</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowCat && <p>(=^ェ^=)</p>}
      
    </>
  );
}

export default App;
