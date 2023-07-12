import React from "react";
import Router from "./pages/routes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
      <Footer />
    </div>
  );
}

export default App;
