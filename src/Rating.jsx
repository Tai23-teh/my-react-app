import { useState } from "react";

function Rating() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((num) => (
        <i
          key={num}
          className={`bi bi-${num}-circle rating-item ${
            selected === num ? "active" : ""
          }`}
          onClick={() => setSelected(num)}
        ></i>
      ))}
    </div>
  );
}

export default Rating;