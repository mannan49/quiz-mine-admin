import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
