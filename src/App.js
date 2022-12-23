import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dash from "./Dash";
import Users from "./Users";
import Createuser from "./Createuser";
import Userview from "./Userview";
import Edituser from "./Edituser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/nav" element={<Navbar></Navbar>}>
          <Route path="dash" element={<Dash></Dash>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="createuser" element={<Createuser></Createuser>}></Route>
          <Route path="userview/:id" element={<Userview></Userview>}></Route>
          <Route path="useredit/:id" element={<Edituser></Edituser>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
