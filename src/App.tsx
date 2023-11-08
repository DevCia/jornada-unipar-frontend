import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Dashboard from './Layouts/Dashboard';
import { Contact } from './pages/contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
