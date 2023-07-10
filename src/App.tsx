import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.js';
import { Store } from './pages/Store.js';
import { Navbar } from './components/Navbar.js';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          {/* element and path are called props and they are like args to the component */}
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App
