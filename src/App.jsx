import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked, title]);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setCount((prevState) => {
            return prevState + 1;
          });
        }}
      >
        <h2>
          {title} <br /> {count}
        </h2>

        <button
          onClick={() => {
            setHasLiked(!hasLiked);
          }}
        >
          {hasLiked ? "Liked" : "Like"}
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>
      <div className="card-container">
        <Card title="Batman" />
        <Card title="Superman VS Batman" />
      </div>
    </div>
  );
};

export default App;
