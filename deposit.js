function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState(0);
  const ctx = React.useContext(UserContext);
  const [validTransaction, setValidTransaction] = React.useState(false);

  function validate(field, label) {
    let depInput = Number(field);
    console.log(depInput);
    if (!Number.isInteger(depInput)) {
      setStatus(
        `Error: Please enter valid amount. Please exclude special characters.`
      );
      setTimeout(() => setStatus(""), 3000);

      return false;
    }
    if (depInput <= 0) {
      setStatus("Error: Please enter in valid deposit amount.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validate(deposit, "deposit")) return;
    let oldBal = ctx.users[0].balance;
    ctx.users[0].balance += Number(deposit);
    let newBal = ctx.users[0].balance;
    let transactionObj = {
      type: "Deposit",
      oldBal: oldBal,
      amount: deposit,
      newBal: newBal,
    };
    console.log(transactionObj);
    ctx.users[0].transactions.push(transactionObj);
    console.log(JSON.stringify(ctx.users[0]));

    setShow(false);
  }

  function submitDep() {
    setDeposit("");
    setShow(true);
  }

  // (e) => setDeposit(e.currentTarget.value)
  function handleChange(e) {
    setDeposit(e.currentTarget.value);
    if (e.currentTarget.value == 0 || e.currentTarget.value == "") {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
  }

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            Balance: ${JSON.stringify(ctx.users[0].balance)}
            <br />
            <br />
            Deposit:
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Deposit Amount"
              onChange={handleChange}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!validTransaction}
              onClick={handleDeposit}
            >
              Deposit Amount
            </button>
          </>
        ) : (
          <>
            <h5>Successful Deposit</h5>
            <button type="submit" className="btn btn-light" onClick={submitDep}>
              Make Another Deposit
            </button>
          </>
        )
      }
    />
  );
}
