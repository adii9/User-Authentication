import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Maps.css'
import 'leaflet/dist/leaflet.css'
import React, { useState, useEffect } from 'react';


function Maps() {

    const [location, setLocation] = useState([20.5937, 73.9629])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation([
                    position.coords.latitude,
                    position.coords.longitude
                ])
            })
        }
        else {
            console.log("Browser Doesn't Support the Geolocation")
        }
    }, [])


    return (
        <MapContainer center={location} zoom={12} scrollWheelZoom={true} style={{height: '100vh'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )


}

export default Maps