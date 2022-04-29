import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Pages from './pages';
import Original from './pages/original';
import Bonus from './pages/bonus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="original" element={<Original />} />
        <Route path="bonus" element={<Bonus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
