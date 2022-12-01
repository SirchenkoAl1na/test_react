import './assets/stylesheets/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
