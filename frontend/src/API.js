import axios from 'axios'

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/UserDetails/',
    headers:{
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        'Authorization': 'Token 2a741aa31c4d665af416e5d9f1e8d21614ba6b8a'
    }
})