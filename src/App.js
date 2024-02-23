import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {pages} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<pages.home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;