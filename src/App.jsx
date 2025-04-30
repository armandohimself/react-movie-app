import "./App.css";

const Card = ({ title }) => {
  return (
    <>
      <div>Card Component</div>
      <div>{title}</div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>
      <Card title="Batman" />
      <Card title="Superman VS Batman" />
    </div>
  );
};

export default App;
