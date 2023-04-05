import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import New_User from './components/New_User'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Maps from './components/Map'
import ParticlePortfolio from './components/ParticlePortfolio';
import DogAdoption from './components/DogAdoption';
import NewPost from './components/NewPost';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/newuser' element={<New_User />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/map' element={<Maps />}></Route>
          <Route path='/ParticlePortfolio' element={<ParticlePortfolio />}></Route>
          <Route path='/dogAdoption' element={<DogAdoption />}></Route>
          <Route path='/newPost' element={<NewPost />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;

