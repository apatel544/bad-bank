function AllData(){
  const ctx = React.useContext(UserContext);

  let index = ctx.users.findIndex(user => {
    return user.current == true;
  });
  // get table column
//  const column = Object.keys(ctx.users[0].transactions[0]);
const column = ['Transaction', 'Before', 'Amount', 'New Balance'];
 
 // get table heading data
 const ThData =()=>{
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

  // get table row data
  const tdData =() =>{
    console.log(ctx.users[0].transactions);
    return ctx.users[0].transactions.map((data)=>{
      
      return(
        <tr>
            <td>{data.type}</td>
            <td>${data.oldBal}</td>
            <td>{data.type == 'Withdrawal' ? '-':''}${data.amount}</td>
            <td>${data.newBal}</td>
        </tr>
      )
    })
  }


    return (
      <>
      <h1>{ctx.users[0].name}'s Transactions</h1>
      <Card
            bgcolor="primary"
            txtcolor="white"
            header="All Transactions"
            title={"All transactions"}
            text="You can view all deposits and withrawals"
            body={(
              <div>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th></th>
                            <th>Before</th>
                            <th>Amount</th>
                            <th>New Balance</th> */}
                            {ThData()}
                        </tr>
                    </thead>
                    <tbody id='transactionData'>
                      {tdData()}
                    </tbody>
                </table>
            </div>
            )}
        />
      </>
    );
  }