import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

const {onToggleButton, tg} = useTelegram();

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
    tg.ready();
    }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
