import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  const [step, setstep] = useState(1);
  return (

    <div className="App" style={{textAlign: "center", border: '5px solid white', margin: "250px", padding: "100px", marginTop: "150px", width: "500px", background: "lavender",borderradius:"10px"  }}>
      <header className="App-header">
        <h1 style={{ fontSize: "30px", color: "black" }}>Counter</h1>
      </header>

      <h2 style={{ fontSize: "30px", color: "black" }}>{count}</h2>
      <div>
        <button style={{ marginLeft: 5, background: "green", padding: "10px" }} onClick={() => setcount(count + step)}>Increment</button>
        <button style={{ marginLeft: 5, background: "red", margin: "8px", padding: "10px" }} onClick={() => setcount(count - step)}>Decrement</button>
        <button style={{ marginLeft: 5, background: "blue", padding: "10px" }} onClick={on}>Reset</button>
      </div>  </div>
  );
  function on() {
    alert("starting from zero");
    setcount(0);

  }
  function f() {
    let e = document.getElementById("o").value
    setstep(Number(e))
  }
}

export default App;
