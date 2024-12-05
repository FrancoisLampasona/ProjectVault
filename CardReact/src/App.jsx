import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardProva from "./components/CardProva";
import CreatoreCard from "./components/CreatoreCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <CreatoreCard></CreatoreCard>
      </body>
    </>
  );
}

export default App;
