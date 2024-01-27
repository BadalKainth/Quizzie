import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
