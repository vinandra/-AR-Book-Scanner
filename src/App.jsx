import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ar from "./pages/Ar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-page' element={<Ar />} />
      </Routes>
    </Router>
  );
};

export default App;
