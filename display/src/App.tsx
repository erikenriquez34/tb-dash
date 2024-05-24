import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu"

function App() {
    const [screen, setScreen] = useState(1);
    const toggleScreen = (screen: number) => {
        setScreen(screen)
    }

    return (
        <div className="App">
            <Navbar screen={screen} toggleScreen={toggleScreen}/>
            <Menu screen={screen}/>
        </div>
    );
}

export default App;
