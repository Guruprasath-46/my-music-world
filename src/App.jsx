import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import Songs from "./pages/Songs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;