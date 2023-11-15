import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Docs from './pages/Docs/Docs';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
       </Routes>
    </>
 );
};

export default App;