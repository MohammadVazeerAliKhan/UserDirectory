import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDirectory from "./pages/UserDirectory";
import UserDetails from "./pages/UserDetails";
import { useUserContext } from "./UserContext";
import "./App.css";
function App() {
  const { users } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDirectory users={users} />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
