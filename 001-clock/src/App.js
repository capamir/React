import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello World, it's {time}</h1>
    </div>
  );
}

export default App;
