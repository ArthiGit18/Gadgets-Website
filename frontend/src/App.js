
import HomeV1 from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './pages/navbar';
import About from './pages/about';
import Explore from './pages/explore';
import Sellers from './pages/sellers';
import Special from './pages/special';
import Testimonial from './pages/testimonial';
import Service from './pages/service';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeV1 />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/sellers" element={<Sellers />} />
      <Route path="/service" element={<Service />} />
      <Route path="/special" element={<Special />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
   </Router>
  );
}

export default App;
