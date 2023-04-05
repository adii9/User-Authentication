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
import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import newPost from './newPost.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react'
import DogAdoptionAPI from '../DogAdoptionAPI';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function NewPost() {

    const [petType, setPetType] = useState('')
    const [petName, setPetName] = useState('')
    const [breed, setBreed] = useState('')
    const [gender, setGender] = useState('')
    const [neutered, setNeutered] = useState('')
    const [vaccinationStatus, setVaccinationStatus] = useState('')
    const [shotsUptoDate, setShotsUptoDate] = useState('')
    const [goodWithKids, setGoodWithKids] = useState('')
    const [goodWithDogs, setGoodWithDogs] = useState('')
    const [goodWithCats, setGoodWithCats] = useState('')
    const [reason, setReason] = useState('')
    const [additionalInformation, setAdditionalInformation] = useState('')
    const navigate = useNavigate()
    const dropDownItems = ['Cat', 'Dog']
    const genderDropDown = ['male', 'female']
    const [show, setShow] = useState(false)

    const pushData = (petType, petName, breed, gender ,neutered, vaccinationStatus, shotsUptoDate, goodWithCats, goodWithDogs, goodWithKids, reason, additionalInformation) => {
        // console.log(petType, petName, breed, gender,neutered, vaccinationStatus, shotsUptoDate, goodWithCats, goodWithDogs, goodWithKids, reason, additionalInformation)
        console.log("petType -> ", petType)
        console.log("gender -> ", gender)
        // console.log("petName -> ", petName)
        // console.log("breed -> ", breed)
        // console.log("vaccinationStatus -> ", vaccinationStatus)
        // console.log("neutered -> ", neutered)
        // console.log("shotsUptoDate -> ", shotsUptoDate)
        // console.log("goodWithCats -> ", goodWithCats)
        // console.log("goodWithDogs -> ", goodWithDogs)
        // console.log("goodWithKids -> ", goodWithKids)
        // console.log("reason -> ", reason)
        // console.log("additionalInformation -> ", additionalInformation)
        // let items = {petType, petName, breed,gender ,neutered, vaccinationStatus, shotsUptoDate, goodWithCats, goodWithDogs, goodWithKids, reason, additionalInformation}
        // try {
        //     DogAdoptionAPI.post('/', items)
        //     .then(() => {
        //         setPetType('')
        //         setPetName('')
        //         setBreed("")
        //         setGender('')
        //         setNeutered("")
        //         setVaccinationStatus('')
        //         setShotsUptoDate('')
        //         setGoodWithCats('')
        //         setGoodWithDogs('')
        //         setGoodWithKids('')
        //         setReason('')
        //         setAdditionalInformation('')
        //         setShow(true)
        //     })
        // }
        // catch(e) {
        //     alert(e)
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        pushData(petType, petName, breed, neutered, vaccinationStatus, shotsUptoDate, goodWithCats, goodWithDogs, goodWithKids, reason, additionalInformation)
    }


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '140vh', backgroundColor: '#edf6f9' }}>
                <AppBar position="static" sx={{ backgroundColor: '#006d77' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { navigate('/') }}
                        ></IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            PawsitiveAdoption
                        </Typography>
                        <Button color="inherit" onClick={() => { navigate('/') }}>About Us</Button>
                        <Button color="inherit" onClick={() => { navigate('/portfolio') }}>Contact</Button>
                    </Toolbar>
                </AppBar>

                <div className='container'>
                    <Form onSubmit={handleSubmit}>
                        <h1>
                            Let's start with some basic details
                        </h1>
                        {show ? <Alert severity="success">This is a success alert — check it out!</Alert> : null}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {!petType ? "Identify Your Pet" : petType}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {dropDownItems.map((item) => (
                                    <Dropdown.Item onClick={() => setPetType(item)}>{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown style={{marginTop: 10, marginBottom: 10}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {!gender ? "Gender of the Pet" : gender}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* {genderDropDown.map((item) => (
                                    <Dropdown.Item onClick={() => setGender(item)}>{item}</Dropdown.Item>
                                ))} */}
                                <Dropdown.Item>Male</Dropdown.Item>
                                <Dropdown.Item>Female</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name of your pet</Form.Label>
                            <Form.Control type="text" required value={petName} placeholder="Enter Name of your pet" onChange={(e) => setPetName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Breed of the Dog</Form.Label>
                            <Form.Control type="text" placeholder="Enter Breed. Eg: Golden Retriever" required value={breed} onChange={(e) => setBreed(e.target.value)} />
                            <Form.Text className="text-muted">
                                This helps the Adopter know your dog better
                            </Form.Text>
                        </Form.Group> */}

                        {/* <div className='radio-buttons-container'>
                            <FormControl className="mb-3" controlId="formBasicCheckbox" required>
                                <FormLabel id="demo-radio-buttons-group-label">Vaccination Status</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    value={vaccinationStatus}
                                    onChange={(e) => setVaccinationStatus(e.target.value)}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mb-3" controlId="formBasicCheckbox">
                                <FormLabel id="demo-radio-buttons-group-label">Neutered</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    value={neutered}
                                    onChange={(e) => setNeutered(e.target.value)}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mb-3" controlId="formBasicCheckbox">
                                <FormLabel id="demo-radio-buttons-group-label">Shots Up to Date</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    value={shotsUptoDate}
                                    onChange={(e) => setShotsUptoDate(e.target.value)}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mb-3" controlId="formBasicCheckbox">
                                <FormLabel id="demo-radio-buttons-group-label">Good with Kids</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    value={goodWithKids}
                                    onChange={(e) => setGoodWithKids(e.target.value)}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mb-3" controlId="formBasicCheckbox">
                                <FormLabel id="demo-radio-buttons-group-label">Good with other dogs</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    value={goodWithDogs}
                                    onChange={(e) => setGoodWithDogs(e.target.value)}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mb-3" controlId="formBasicCheckbox">
                                <FormLabel id="demo-radio-buttons-group-label">Good with Cats</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    value={goodWithCats}
                                    onChange={(e) => setGoodWithCats(e.target.value)}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div> */}
                        <div className='py-md-3'>
                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Reason for giving away your pet</Form.Label>
                                <Form.Control as="textarea" rows={3} required value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Please explain the reason for giving away your pet" />
                                <Form.Text className="text-muted">
                                    No one likes change
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Additional Information</Form.Label>
                                <Form.Control as="textarea" rows={3} required value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} placeholder="Please mention more information" />
                                <Form.Text className="text-muted">
                                    No one likes change
                                </Form.Text>
                            </Form.Group> */}

                            <Button variant="primary" type="submit" style={{ margin: '20px' }}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>

            </div>


        </>
    )
}

export default NewPost