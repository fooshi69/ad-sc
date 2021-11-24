import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import UpdateUser from "./pages/UpdateUser";
import AddUser from "./pages/AddUser";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/update-user" exact element={<UpdateUser />} />
          <Route path="/add-user" exact element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App