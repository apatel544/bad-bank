function Spa() {
  return (
    <>
      <HashRouter>
        <NavBar />

        <UserContext.Provider
          value={{
            users: [
              {
                name: "ankur",
                email: "ankur@mit.edu",
                password: "secret",
                balance: 100,
                transactions: [],
              },
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          {/* <Route path="/login/" component={Login} /> */}
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
