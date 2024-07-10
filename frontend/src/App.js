import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBook from "./components/CreateBook"




function App() {
    return (
      <Router>
        <div className="">
          <div className="">
            <Routes>
              <Route path="/book/create" element={<CreateBook/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default App;
