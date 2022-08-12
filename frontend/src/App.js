import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} />
        <Route exact path="/dashboard" element={<><Navbar/><Dashboard/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
