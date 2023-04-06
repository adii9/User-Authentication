import { useEffect, useState } from "react"
import DogAdoptionAPI from "../DogAdoptionAPI"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Listing() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const[option1, setOption1] = useState('Option 1');
    const [option2, setOption2] = useState('Option 2');
    const [option3, setOption3] = useState('Option 3');

    const handleOption1Change = (event) => {
        setOption1(event.target.value);
    };

    const handleOption2Change = (event) => {
        setOption2(event.target.value);
    };

    const handleOption3Change = (event) => {
        setOption3(event.target.value);
    };


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        DogAdoptionAPI.get('/')
            .then((res) => {
                setLoading(true)
                setData(res)
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }

    console.log("Data -> ", data)

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#edf6f9', height: '100vh', alignItems: 'center' }}>
                <h1 style={{ margin: 0, padding: '2rem', textAlign: 'center' }}>Let's find an ideal pet for you</h1>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ border: '1px solid black', padding: '20px' }}>

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