import { useState, React } from "react";
//import { useNavigate } from "react-router-dom";
import * as Realm from "realm-web";

function APP() {
  const APPID = "scanup-bnmev";
  const APP = new Realm.App({ id: APPID });

  class Login extends React.Component {
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
    };
    mongopush = async () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [certificat, setCertificat] = useState("");
      const [role, setRole] = useState("");
      const [division, setDivision] = useState("");
      const [partition, setPartition] = useState("");

      db.collection.insert({
        certificat: { certificat },
        division: { division },
        password: { password },
        role: { role },
        user: { email },
        partition: { partition },
      });
    };
  }
}

export default APP;
