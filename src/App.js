import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import LandingPage from "./LandingPage/landing";

function App() {
  let yayAuth = localStorage.getItem("YayAuth");

  return (
    <div className="App">
      <BrowserRouter>
        {/* {yayAuth == "true" && <Navigate to="/dashboard"></Navigate>}
        {!yayAuth && <Navigate to="/"></Navigate>} */}
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
