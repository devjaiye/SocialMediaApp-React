import Home from "./pages/home/Home";
import Login from "../../client/src/components/login/Login"
import Register from "../../client/src/components/register/Register"
import Profile from "../../client/src/pages/profile/Profile"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
      </Router>
  )
}

export default App;
