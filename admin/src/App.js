
import Main from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SmartWatch } from './pages/smartWatch';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/smartWatch" element={<SmartWatch />} />
    </Routes>
   </Router>
  );
}

export default App;
