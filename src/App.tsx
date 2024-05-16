import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import FlightSearch from "./components/flight-search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FlightSearch />}></Route>
      </Routes>
    </>
  );
}

export default App;
