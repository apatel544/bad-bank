function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [ amount, setAmount ] = React.useState(0);
  React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  const ctx = React.useContext(UserContext);

  function validate(balance, field, label) {
    let numInput = Number(field);
    if (!Number.isInteger(numInput)) {
      setStatus(
        "Error: Please enter a valid NUMBER withdrawal " +
          label +
          ". No symbols or extra characters"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field > balance) {
      setStatus("Error: Withdrawal " + label + " exceeds current balance");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (field < 0) {
      setStatus("Error: Please enter a valid POSITIVE withdrawal " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    let index = ctx.users.findIndex((user) => {
      return user.current == true;
    });
      console.log(ctx.users[0].balance);
    if (!validate(ctx.users[0].balance, amount, "amount")) return;
    console.log("Before: " + JSON.stringify(ctx.users[0].balance));
    console.log("amount: " + amount);

    let oldBal = ctx.users[0].balance;
    ctx.users[0].balance -= Number(amount);
    let newBal = ctx.users[0].balance;

    console.log("new balance: " + JSON.stringify(ctx.users[0].balance));

    // let transaction = `Withdrew $${amount}. New Balance: $${ctx.users[0].balance}`;
    let transactionObj = {
      type: "Withdrawal",
      oldBal: oldBal,
      amount: amount,
      newBal: newBal,
    };
    // add transaction to ctx.users[0].withdraw
    ctx.users[0].transactions.push(transactionObj);
    console.log(JSON.stringify(transactionObj));
    console.log(JSON.stringify(ctx.users[0].transactions));
    setShow(false);
  }

  function submitWithdrawal() {
    setAmount("");
    setValidTransaction(false);
    setShow(true);
  }

  // (e) => setDeposit(e.currentTarget.value)
  function handleChange(e) {
    setAmount(e.currentTarget.value);
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
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
             Balance: ${JSON.stringify(ctx.users[0].balance)}
            <br />
            <br />
            Withdraw:
            <br />
            <input
              type="text"
              className="form-control"
              id="Withdraw"
              placeholder="Withdraw Amount"
              value={amount}
              onChange={handleChange}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!validTransaction}
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Withdrawal Successful!</h5>
            New Balance: $
            {JSON.stringify(
              ctx.users[0].balance
            )}
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={submitWithdrawal}
            >
              Make Another Withdrawal
            </button>
          </>
        )
      }
    />
  );
}
