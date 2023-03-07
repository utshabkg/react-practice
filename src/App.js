import "./App.css";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <Student name="Utshab" age={20} />
      <Student name="Kumar" age={22} />
      <Student />
    </div>
  );
}

export default App;
