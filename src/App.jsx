import { useState } from "react";
import "./App.css";
//import Joy from "./Joy.jsx"//
function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="body">
      <div className="icon">
        <i className="bi bi-star"></i>
      </div>

      <h1>How did we do?</h1>

      <p>
        Please take a moment to let us know how we did with your support request.
      </p>


      <div className="rating">
        <i
          className={`bi bi-1-circle rating-item ${selected === 1 ? "active" : ""}`}
          onClick={() => setSelected(1)}
        ></i>

        <i
          className={`bi bi-2-circle rating-item ${selected === 2 ? "active" : ""}`}
          onClick={() => setSelected(2)}
        ></i>

        <i
          className={`bi bi-3-circle rating-item ${selected === 3 ? "active" : ""}`}
          onClick={() => setSelected(3)}
        ></i>

        <i
          className={`bi bi-4-circle rating-item ${selected === 4 ? "active" : ""}`}
          onClick={() => setSelected(4)}
        ></i>

        <i
          className={`bi bi-5-circle rating-item ${selected === 5 ? "active" : ""}`}
          onClick={() => setSelected(5)}
        ></i>
      </div>

      <button className="submit">Submit</button>
    </div>
  );
}

export default App;