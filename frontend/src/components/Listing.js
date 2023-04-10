import { useEffect, useState } from "react";
import DogAdoptionAPI from "../DogAdoptionAPI";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";

function Listing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const dropDownItems = ["Cat", "Dog"];
  const [petType, setPetType] = useState("");

  const ApiJson = {
    country: "India",
  };

  const CityJson = {
    country: "India",
    state: "Bihar",
  };

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
    CityJson.state = state;
    console.log(CityJson);
    // fetch cities based on selected state
    axios
      .post(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        CityJson
      )
      .then((response) => {
        console.log("Cities Data -> ", response.data.data);
        setCities(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const getDataAPI = (petType, city, state) => {
    console.log("Parameters passed", petType, city, state);
    const params = {
      petType: petType,
      city: city,
      state: state,
    };
    console.log("Parameters List passed -> ", params);
    try {
      axios
        .get("http://127.0.0.1:8000/DogAdoptionFilter/", {
          params: {
            petType: petType,
            city: city,
            state: state,
          },
        })
        .then((res) => {
          setLoading(true);
          console.log("Data is -> ", res.data);
          setData(res.data);
          console.log("The Data being fetched using filters -> ", data);
        })
        .catch(console.log);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDataAPI(petType, selectedCity, selectedState);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#edf6f9",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, padding: "2rem", textAlign: "center" }}>
          Let's find an ideal pet for you
        </h1>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ border: "1px solid black", padding: "20px" }}>
              <Button variant="danger" type="reset">
                Clear All Filters
              </Button>
              <Form onSubmit={handleSubmit}>
                <Form.Label style={{ marginTop: 5 }}>Pet Type</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {!petType ? "Identify Your Pet" : petType}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {dropDownItems.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setPetType(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Form.Label style={{ marginTop: 5 }}>
                  Search By State
                </Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {!selectedState ? "State" : selectedState}
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    {loading ? (
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      states.map((state) => (
                        <Dropdown.Item
                          key={state.name}
                          onClick={() => handleStateSelect(state.name)}
                        >
                          {state.name}
                        </Dropdown.Item>
                      ))
                    )}
                  </Dropdown.Menu>
                </Dropdown>

                {selectedState && (
                  <div>
                    <Form.Label style={{ marginTop: 5 }}>
                      Search By City
                    </Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {!selectedCity ? "City" : selectedCity}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ maxHeight: "200px", overflowY: "auto" }}
                      >
                        {loading ? (
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        ) : (
                          cities.map((city) => (
                            <Dropdown.Item
                              key={city}
                              onClick={() => handleCitySelect(city)}
                            >
                              {city}
                            </Dropdown.Item>
                          ))
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                <Button
                  variant="primary"
                  type="submit"
                  style={{ margin: "20px" }}
                >
                  Apply Filters
                </Button>
              </Form>
            </div>
          </div>
          <div
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.length != 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {data.map((item, index) => (
                  <Card key={index} style={{ width: "18rem", margin: 20 }}>
                    <Card.Header>{item.petName}</Card.Header>
                    <Card.Title style={{ margin: 10 }}>{item.title}</Card.Title>
                    <Card.Text style={{ margin: 10 }}>{item.breed}</Card.Text>
                  </Card>
                ))}
              </div>
            ) : (
              <p>No Data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
