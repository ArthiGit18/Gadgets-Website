
import HomeV1 from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/collections/product';
import Blog from './pages/blog';
import { Contact } from './pages/contact';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeV1 />} />
      <Route path="/product-list" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </Router>
  );
}

export default App;
