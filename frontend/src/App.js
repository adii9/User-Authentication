import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import New_User from './components/New_User'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/newuser' element={<New_User />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;

