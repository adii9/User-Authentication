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
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';


function NewPost() {

    const [petType, setPetType] = useState('')
    const [petName, setPetName] = useState('')
    const [breed, setBreed] = useState('')
    const [gender, setGender] = useState("")
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
    const [currentOwnerName, setCurrentOwnerName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    const ApiJson = {
        "country": "India"
    }

    const CityJson =
    {
        "country": "India",
        "state": "Bihar"
    }

    const handleStateSelect = (state) => {
        setSelectedState(state);
        setLoading(true);
        CityJson.state = state
        console.log(CityJson);
        // fetch cities based on selected state
        axios
            .post('https://countriesnow.space/api/v0.1/countries/state/cities', CityJson)
            .then((response) => {
                console.log("Cities Data -> ", response.data.data)
                setCities(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };

    const pushData = (petType, gender, petName, breed, vaccinationStatus, neutered, shotsUptoDate, goodWithKids, goodWithDogs, goodWithCats, reason, additionalInformation, currentOwnerName, contactNumber, selectedState, selectedCity) => {
        // const items = {petType, petName, breed, vaccinationStatus, gender, neutered, shotsUptoDate, goodWithKids, goodWithDogs, goodWithCats, reason, additionalInformation, currentOwnerName, contactNumber, selectedCity, selectedState};
        const items = {
            petType: petType,
            gender: gender,
            petName: petName,
            breed: breed,
            vaccinationStatus: vaccinationStatus,
            neutered: neutered,
            shotsUptoDate: shotsUptoDate,
            goodWithKids: goodWithKids,
            goodWithDogs: goodWithDogs,
            goodWithCats: goodWithCats,
            reason: reason,
            additionalInformation: additionalInformation,
            currentOwnerName: currentOwnerName,
            contactNumber: contactNumber,
            state: selectedState,
            city: selectedCity
        };

        try {
            console.log("Data -> ", (items))
            DogAdoptionAPI.post('/', items)
                .then(() => {
                    setPetType('')
                    setPetName('')
                    setBreed("")
                    setGender('')
                    setNeutered("")
                    setVaccinationStatus('')
                    setShotsUptoDate('')
                    setGoodWithCats('')
                    setGoodWithDogs('')
                    setGoodWithKids('')
                    setReason('')
                    setAdditionalInformation('')
                    setCurrentOwnerName('')
                    setContactNumber('')
                    setCity('')
                    setState('')
                    setShow(true)
                })
        }
        catch (e) {
            console.log("The error is -> ", e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        pushData(petType, gender, petName, breed, vaccinationStatus, neutered, shotsUptoDate, goodWithKids, goodWithDogs, goodWithCats, reason, additionalInformation, currentOwnerName, contactNumber, selectedState, selectedCity)
    }

    useEffect(() => {
        setLoading(true);
        axios
            .post("https://countriesnow.space/api/v0.1/countries/states", ApiJson)
            .then((response) => {
                setStates(response.data.data.states);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '200vh', backgroundColor: '#edf6f9' }}>

                <div className='container'>
                    <Form onSubmit={handleSubmit}>
                        <h1>
                            Let's start with some basic details of your pet
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

                        <Dropdown style={{ marginTop: 10, marginBottom: 10 }}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {!gender ? "Gender of the Pet" : gender}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {genderDropDown.map((item) => (
                                    <Dropdown.Item onClick={() => setGender(item)}>{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name of your pet</Form.Label>
                            <Form.Control type="text" required value={petName} placeholder="Enter Name of your pet" onChange={(e) => setPetName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Breed</Form.Label>
                            <Form.Control type="text" placeholder="Enter Breed. Eg: Golden Retriever" required value={breed} onChange={(e) => setBreed(e.target.value)} />
                            <Form.Text className="text-muted">
                                This helps the Adopter know your dog better
                            </Form.Text>
                        </Form.Group>

                        <div className='radio-buttons-container'>
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
                        </div>
                        <div className='py-md-3'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
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
                            </Form.Group>

                            <h1>Let's get some basic details of you!</h1>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Current Owner Name</Form.Label>
                                <Form.Control required value={currentOwnerName} type='text' onChange={(e) => setCurrentOwnerName(e.target.value)} placeholder="What's Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control required value={contactNumber} type='text' pattern="[0-9]*" onChange={(e) => setContactNumber(e.target.value)} placeholder="What's your Phone number" />
                                <Form.Text className="text-muted">
                                    Don't you worry this information will only be available to verified users
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Label style={{ marginTop: 5 }}>Search By State</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {!selectedState ? "State" : selectedState}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
                                        {loading ? (
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        ) : (
                                            states.map((state) => (
                                                <Dropdown.Item key={state.name} onClick={() => handleStateSelect(state.name)}>
                                                    {state.name}
                                                </Dropdown.Item>
                                            ))
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                                {selectedState && (
                                    <div>
                                        <Form.Label style={{ marginTop: 5 }}>Search By City</Form.Label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                {!selectedCity ? "City" : selectedCity}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
                                                {loading ? (
                                                    <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                ) : (
                                                    cities.map((city) => (
                                                        <Dropdown.Item key={city} onClick={() => handleCitySelect(city)}>
                                                            {city}
                                                        </Dropdown.Item>
                                                    ))
                                                )}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                )}


                                <Form.Text className="text-muted">
                                    Don't you worry this information will only be available to verified users. This information will be helpful for the new owner to locate you.
                                </Form.Text>
                            </Form.Group>

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