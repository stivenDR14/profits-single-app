import { Routes, Route, BrowserRouter } from "react-router-dom";
import Data from "./pages/Data";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/data" element={<Data/>} />
        <Route element={<NotFound/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
