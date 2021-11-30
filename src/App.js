import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import ProjectDetails from './Component/Portfolio/ProjectDetails';
import Header from './Component/Shared/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:projectdetails" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
