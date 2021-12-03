import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blogs from './Component/BlogPosts/Blogs';
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
          <Route path="blogs" element={<Blogs />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:projectId" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
