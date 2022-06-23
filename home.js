function Home() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the Bank"
      text="Come and use our bank"
      body={
        <img src="bank.png" className="img-fluid" alt="Responsive image"></img>
      }
    />
  );
}
