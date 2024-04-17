import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Index";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
}

export default App;
