// import { useState } from "react";
//import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Update user</h1>
      <form>
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="text" placeholder="Certificat" />
        <br />
        <input type="text" placeholder="Role" />
        <br />
        <input type="text" placeholder="Division" />
        <br />
        <input type="submit" value="Update " />
      </form>
    </div>
  );
}

export default App;
