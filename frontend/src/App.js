
import HomeV1 from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/collections/product';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeV1 />} />
      <Route path="/product-list" element={<Product />} />
    </Routes>
   </Router>
  );
}

export default App;
