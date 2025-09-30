import Home from "./components/Home";
import Admin from "./components/Admin";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qwerty/*" element={<Admin />} />
    </Routes>
  );
}

export default App
