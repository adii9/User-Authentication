import { useEffect, useState } from "react"
import DogAdoptionAPI from "../DogAdoptionAPI"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Listing() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


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
            <div style={{ display: 'flex', flexDirection: 'column', height: '140vh', backgroundColor: '#edf6f9' }}>

            </div>
        </>
    )
}

export default Listing