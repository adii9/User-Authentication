import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useLocation } from 'react-router-dom';


function Home() {

    useEffect(() => {

        fetchData()
    }, [])

    const fetchData = () => {
        API.get('/')
            .then((res) => {
                setUserData(res.data)
            })
        console.log(userData)
    }

    const deleteUser = (index) => {
        console.log("Key Value -> ", index)
        if (index == id) {
            alert("You can not delete your own profile!!")
        }
        else {
            API.delete('/' + index + '/')
            .then(() => {
                alert("User Deleted")
                fetchData()
            })
        }

    }

    const navigate = useNavigate()
    const [userData, setUserData] = useState([])
    const {state} = useLocation()
    const {id} = state

    console.log("Value of ID -> ", id)

    return (
        <>
            <h2>List Of Users</h2>

            {userData.flatMap((data, key) => (
                <Card key={key} variant="outlined">
                    <CardContent>
                        <Typography variant="h6" color="" gutterBottom>
                            {data.firstName} {data.lastName}
                        </Typography>
                        <Typography variant="h6" color="" gutterBottom>
                            {data.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined' onClick={() => {deleteUser(data.id)}}>Delete User</Button>
                    </CardActions>
                </Card>
            ))}

        </>
    )
}

export default Home