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
import Listing from './components/Listing';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <AppBar position="static" sx={{ backgroundColor: '#006d77' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href='/dogAdoption'
              >
                <img src=''/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PawsitiveAdoption
              </Typography>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit" href='/newPost'>New Post</Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/newuser' element={<New_User />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/map' element={<Maps />}></Route>
            <Route path='/ParticlePortfolio' element={<ParticlePortfolio />}></Route>
            <Route path='/dogAdoption' element={<DogAdoption />}></Route>
            <Route path='/newPost' element={<NewPost />}></Route>
            <Route path='/listing' element={<Listing />}></Route>
          </Routes>

        </div>
      </Router>

    </>
  );
}

export default App;

