import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Dog from './DogPicture.jpg'
import AdoptMe from './AdoptMe.jpg'

function DogAdoption() {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#edf6f9' }}>
                <AppBar position="static" sx={{ backgroundColor: '#006d77' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        ></IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PawsitiveAdoption
                        </Typography>
                        <Button color="inherit" onClick={() => { navigate('/') }}>About Us</Button>
                        <Button color="inherit" onClick={() => { navigate('/portfolio') }}>Contact</Button>
                        <Button color="inherit" onClick={() => { navigate('/newPost') }}>New Post</Button>
                    </Toolbar>
                </AppBar>
                <div className='container' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <img src={Dog} alt='Dog' style={{ maxWidth: '75vw', maxHeight: '75vh' }} />
                    <div className='container' style={{ position: 'absolute', bottom: 0, left: 50, width: '100%', height: '20%', top: 'auto', maxWidth: '50vw', backgroundColor: 'rgba(237, 246, 249, 0.8)', color: '#333', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateX(40%)' }}>
                        <p style={{ fontFamily: 'Roboto', fontSize: '1.2rem', color: '#006d77', fontWeight: "bold" }}>
                            Adopting a pet not only saves a life, but it also brings immeasurable joy and companionship to yours. Give a pet a chance at a happy life and experience the unconditional love that only a rescue can provide.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button style={{
                                backgroundColor: '#83c5be',
                                color: '#fff',
                                padding: '0.75rem 2rem',
                                borderRadius: '25px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                                transform: 'translateY(0)',
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-5px)';
                                    e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2)';
                                }}>
                                Adopt Now
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', backgroundColor: '#edf6f9', alignItems: 'center' }}>
                <div style={{ flex: '1', padding: '2rem' }}>
                    <h1 style={{ fontFamily: 'Roboto', color: '#006d77', fontWeight: 'bold', margin: '0' }}>Embark on your pet adoption journey with PawsitiveAdoption</h1>
                    <h2 style={{ fontFamily: 'Roboto', color: '#0d3b66', fontWeight: 'bold', margin: '0',marginTop: 15}}>Search Pet</h2>
                    <p style={{ marginTop: '1rem', color: '#8d99ae'}}>Find the perfect dog or cat for you by entering your city above and starting your search.</p>

                    <h2 style={{ fontFamily: 'Roboto', color: '#0d3b66', fontWeight: 'bold', margin: '0',marginTop: 15}}>Connect</h2>
                    <p style={{ marginTop: '1rem', color: '#8d99ae'}}>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>

                    <h2 style={{ fontFamily: 'Roboto', color: '#0d3b66', fontWeight: 'bold', margin: '0',marginTop: 15}}>AdoptLove</h2>
                    <p style={{ marginTop: '1rem', color: '#8d99ae'}}>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
                </div>
                <div className='container' style={{ flex: '1' }}>
                    <img src={AdoptMe} alt='Dog' style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        </>
    )
}

export default DogAdoption