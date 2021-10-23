import React from "react";
import logo from "./logo.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Menu from "./components/MainMenu";

function App() {
    const options = ["2","3"];
    return (
        <div className="App">
        <header> 
            <img src={logo} className="App-logo" alt="logo" />
            <Menu name="1" options={options} />
        </header>
     
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
    );
}

export default App;
