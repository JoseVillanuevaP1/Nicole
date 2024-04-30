import React from 'react'
import { ServiceItem } from './ServiceItem';

export const ServiceItems = () => {
    const services = [
        { iconClass: "fa fa-eye", title: "Tus ojos", description: "El cafe favorito de mis mañanas sería el de tus ojos, son muy lindos, no sabes cuanto me encantan." },
        { iconClass: "fa fa-heart", title: "Tu sonrisa", description: "Tu sonrisa genera la mia, es dificil no reir cuando estoy contigo, eres graciosa y simpatica." },
        { iconClass: "fa fa-moon", title: "Tu bello ser", description: "Lo que mas me gusta de ti, es tu forma de ser, me encanta como eres y lo que deseas ser. Quiero verte cumplirlo." }
    ];

    return (
        <div className="row justify-content-center">
            {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    );
}