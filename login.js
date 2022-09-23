function Login() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.setState("");
  const [password, setPassword] = React.setState("");
  const ctx = React.useContext(UserContext);

  return (
    <>
      <Card
        bgcolor="info"
        header="Login"
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              Email
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add Another Account
              </button>

              {/* ADDING DIRECT LINK TO LOGIN FORM
               <button
                href="#/login/"
                className="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true"
              >
                Login
              </button> */}
            </>
          )
        }
      />
    </>
  );
}
