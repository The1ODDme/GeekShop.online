import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "../../css/contacts.css"

const ContactPage = () => {
    const address = "123 Main St, Anytown, USA";
    const phone = "(123) 456-7890";
    const email = "info@example.com";
    
    const containerStyle = {
        width: '400px',
        height: '400px'
    };
      
    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <div className="contact-page">
            <h1>Наши контакты</h1>
            <p><strong>Адресс:</strong> {address}</p>
            <p><strong>Номер телефона:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default ContactPage;
