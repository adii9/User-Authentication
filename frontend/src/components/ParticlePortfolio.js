import React from 'react'
import Particle from './Particle'
import Portfolio from './Portfolio'
import './ParticlePortfolio.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function ParticlePortfolio() {
    const handleClickScroll = (divId) => {
        const element = document.getElementById(divId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div>
                <Particle />
                <div className='text'>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: 'center', minHeight: '100%' }}>
                        <div style={{ padding: '50px', margin: 15, color: 'white' }}>
                            <h1>Hi, I'am </h1>
                            <h1>Aditya Mathur</h1>
                            <h2>Software Developer</h2>
                            <text style={{ whiteSpace: 'pre-wrap' }}>
                                I'm a software developer with a passion for {"\n"}
                                building high-quality web & mobile applications. {"\n"}

                                I have extensive experience in working with Python / Django {"\n"}
                                and React for developing Web apps & React Native for{"\n"}mobile app development.

                                I also have working experience {"\n"}of using Backend end as Service products like Google Firebase.
                            </text>
                        </div>
                        <div style={{ padding: 30 }}>
                            <img src={require('../profile.jpg')} alt='' height={200} width={200} style={{ alignItems: 'flex-end', borderRadius: 30 }} />
                        </div>
                    </div>
                    <div style={{ alignItems: "flex-start", justifyContent: 'center', padding: 20, textAlign: 'center', color: 'white'}} id='About'>
                        <h1>About</h1>
                        <hr></hr>
                        <text style={{ whiteSpace: 'pre-wrap', padding: 40 }}>
                            I have a working experience of 3 years. Throughout my career, I've developed a deep understanding of best
                            practices in software development and an ability to quickly adapt to new technologies and programming language. {"\n"}
                            My expertise in Python, React, React Native & Firebase has allowed me to build highly scalable & performant applications for clients across
                            a wide range of industries. {"\n"}

                            Weather it's building complex APIs or developing intuitive user interface, I take pride in delivering applications that provide an exceptional user experience.
                        </text>
                        <Button color="inherit" variant="outlined" style={{ margin: 20 }}>Download Resume</Button>
                    </div>
                </div>

            </div>
        </>
    )
}


export default ParticlePortfolio