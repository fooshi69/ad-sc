import APP from "./connectUser";

function INSERTUSER() {
  return (
    <div>
      <h1> Insert user</h1>
      <form>
        <br />
        <input
          value={APP.email}
          type="email"
          placeholder="Email"
          onChange={(e) => APP.setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={APP.password}
          placeholder="Password"
          onChange={(e) => APP.setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={APP.certificat}
          placeholder="Certificat"
          onChange={(e) => APP.setCertificat(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={APP.role}
          placeholder="Role"
          onChange={(e) => APP.setRole(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={APP.division}
          placeholder="Division"
          onChange={(e) => APP.setDivision(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={APP.partition}
          placeholder="Partition"
          onChange={(e) => APP.setPartition(e.target.value)}
        />
        <input type="submit" value="Add " onClick={APP.insertUser()} />
      </form>
    </div>
  );
}

export default INSERTUSER;
