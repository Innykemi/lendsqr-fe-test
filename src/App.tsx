import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./login/login";
import Users from "./dashboard/Users";
import UserDetails from "./dashboard/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
