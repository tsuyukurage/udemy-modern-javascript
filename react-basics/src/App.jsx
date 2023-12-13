import './App.css';

function App() {
  const onClickBtn = () => alert();
  const contentStyle = { 
    color: "lightskyblue",
    fontSize: "18px",
    margin: 100
  };
  return (
    <>
      <h1 style={{ color: "lightcoral" }}>Hello</h1>
      <p style={contentStyle}>What's up?</p>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
}

export default App;
