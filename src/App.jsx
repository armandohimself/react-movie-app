import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>

          <img src="./hero.png" alt="Hero Banner" />
        </header>

        <Search></Search>
      </div>
    </main>
  );
};

export default App;
