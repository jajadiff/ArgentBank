import React from "react";
import Router from "./pages/routes";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <Header />
      <Router />

      <Footer />
    </div>
  );
}

export default App;
