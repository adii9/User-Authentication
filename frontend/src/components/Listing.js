import { useEffect, useState } from "react"
import DogAdoptionAPI from "../DogAdoptionAPI"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


function Listing() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const dropDownItems = ['Cat', 'Dog']
    const [petType, setPetType] = useState('')

    const ApiJson = {
        "country": "India"
    }

    const CityJson =
    {
        "country": "India",
        "state": "Bihar"
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


    // useEffect(() => {
    //     fetchData()
    // }, [])

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

    // const fetchData = () => {
    //     DogAdoptionAPI.get('/')
    //         .then((res) => {
    //             setLoading(true)
    //             setData(res)
    //         })
    //         .catch(console.error)
    //         .finally(() => setLoading(false))
    // }


    const handleCitySelect = (city) => {
        setSelectedCity(city);
    };

    const handleSubmit = (petType, state, city) => {
        DogAdoptionAPI.get('/?petType=${petType}')
            .then((res) => {
                setLoading(true)
                setData(res)
            })
            .catch(console.log)
            .finally(() =>

            console.log("The Data being fetched using filters -> ", data)
            )
    }


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#edf6f9', height: '100vh', alignItems: 'center' }}>
                <h1 style={{ margin: 0, padding: '2rem', textAlign: 'center' }}>Let's find an ideal pet for you</h1>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ border: '1px solid black', padding: '20px' }}>
                            <Button variant="danger">Clear All Filters</Button>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label style={{marginTop: 5}}>Pet Type</Form.Label>
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
                                <Button variant="primary" type="submit" style={{ margin: '20px' }}>
                                    Apply Filters
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div style={{ flex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p>Right</p>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Listing