import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        </Routes>
    </Router>

  );
};

export default App;