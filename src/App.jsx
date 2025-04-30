import "./App.css";

// WIP
// const RandomStyle = () => {
//   useEffect(() => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.documentElement.style.setProperty(
//       "--random-color",
//       `#${randomColor}`
//     );
//   }, []);
// };

const Card = ({ title }) => {
  return (
    <>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-body">Lorem ipsum...</div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>
      <div className="card-container">
        <div className="card-content">
          <Card title="Batman" />
          <Card title="Superman VS Batman" />
        </div>
      </div>
    </div>
  );
};

export default App;
