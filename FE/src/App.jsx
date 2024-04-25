import "./App.css";
import CacheTest from "./pages/CacheTest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/test" element={<CacheTest />} />
          <Route exact path="/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
