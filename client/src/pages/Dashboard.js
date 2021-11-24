import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import * as Realm from "realm-web";
import "./Dashboard.css";

const APPID = "scanup-bnmev";
const APP = new Realm.App({ id: APPID });

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  loginAnonymous = async () => {
    const user = await APP.logIn(
      Realm.Credentials.emailPassword(
        "public@scanup.vicat.fr",
        "LeAheBaWtTRbM3KP"
      )
    );
    this.props.setUser(user);
    const client = APP.currentUser.mongoClient("mongodb-atlas");
    const db = client.db("scanup-db");
    const collection = db.collection("ScanDivision");
    const users = (await collection.find()).slice(0, 10);
    const newList = [];
    if (users) {
      console.log(users);
      for (let user of users) {
        newList.push(
          <ul>
            <li className="title" key={user.user}>
              <span className="red"> User : </span>
              {user.user}
            </li>
            <li key={user.division}>
              <span className="red">division : </span>
              {user.division}
            </li>
            <li key={user.role}>
              <span className="red">Role : </span>
              {user.role}
            </li>
            <li key={user.certificat}>
              <span className="red"> Certificat :</span> {user.certificat}
            </li>
          </ul>,

          <button className="btn btn-update" value={user.user}>
            Update
          </button>,
          <button className="btn btn-delete" value={user.user}>
            Delete
          </button>,
          <div className="trait"></div>
        );
      }
      //newList.push(JSON.stringify(col));
      //alert(jsonDatas)
      this.setState({ list: newList });
    }
  };
  render() {
    return (
      <div>
        <button className="btn" onClick={this.loginAnonymous}>
          Users's list
        </button>
        <p>{this.state.list}</p>
        <ul></ul>
      </div>
    );
  }
}

const Dashboard = () => {
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace("/login");
      } else {
      }
    }
  });
  const [user, setUser] = React.useState(APP.curentUser);

  return (
    <div className="main">
      <h1>Scan'up Dashboard </h1>
      <div className="trait1"></div>

      <div className="">
        <button className="btn">
          <a href="/add-user">Add user</a>
        </button>
        <Login setUser={setUser} />
      </div>
    </div>
  );
};

export default Dashboard;
