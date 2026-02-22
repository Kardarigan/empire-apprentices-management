import { Route, Router, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentsDetails from "./pages/StudentsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student/:id" element={<StudentsDetails />}></Route>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
