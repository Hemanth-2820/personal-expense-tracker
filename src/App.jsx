import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Personal Expense tracker</h1>
      <form action="Submit" className="form">
        <input type="text" placeholder="Description" className="description" />
        <br />
        <input type="text" placeholder="Amount" />
        <br />
        <input type="date" />
      </form>
    </div>
  );
}
