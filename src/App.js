import Header from "./components/Header";

function App() {
  const name = "Ishanka"
  const x =true
  return (
    <div className="App">
    {/* <h1>Hello React, I'm {name}</h1>
    <h1>{1+1+5}</h1>
    <h1>{x ? 'Yse': 'No'}</h1> */}

    <Header />
    </div>
  );
}

export default App;
