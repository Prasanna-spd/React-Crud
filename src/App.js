import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateForm from "./components/createForm";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/create" element={<CreateForm />} />
          <Route exact path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
