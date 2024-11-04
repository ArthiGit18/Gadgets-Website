
import HomeV1 from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeV1 />} />
      {/* <Route path="/shop" element={<List />} /> */}
    </Routes>
   </Router>
  );
}

export default App;
