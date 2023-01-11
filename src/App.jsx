import { useContext } from "react";
import Input from "./components/Input";
import Restart from "./components/Restart";
import Result from "./components/Result";
import TextMonitor from "./components/TextMonitor";
import Timer from "./components/Timer";
import { AppContext } from "./context/AppContext";
import "./styles/App.css";

function App() {
  const { over } = useContext(AppContext);

  return (
    <div className="App">
      <main>
        <TextMonitor />
        <div className="input-group">
          <Input />
          <Timer />
          <Restart />
        </div>
        {over && <Result />}
      </main>
    </div>
  );
}

export default App;
