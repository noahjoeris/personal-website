import logo from "./logo.svg";
import "./App.css";
import "./NavBar";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Website in Progress</p>
      </header>
    </div>
  );
}

export default App;
