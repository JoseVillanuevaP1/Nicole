import React from 'react';
import { MyInfo } from './MyInfo';

// Componente para los enlaces de redes sociales en la sección "Acerca de"
const FollowSocial = () => {
    return (
        <ul className="follow-social mt-lg-5 mt-4">
            <li><a href="https://www.behance.net/"><span className="fa fa-heart"></span></a></li>
            <li><a href="https://in.linkedin.com/company/w3layouts"><span className="fa fa-heart"></span></a></li>
            <li><h5 className="me-md-3">Te quiero tanto preciosa</h5></li>
            <li><a href="https://facebook.com/w3layouts"><span className="fa fa-heart"></span></a></li>
            <li><a href="https://twitter.com/W3layouts"><span className="fa fa-heart"></span></a></li>
        </ul>
    );
}

export const AboutInfo = ({ title }) => {
    return (
        <div className="col-lg-7 w3l-about-info px-lg-4 align-center">
            <h6 className="w3l-title-small mb-1">De mi para ti</h6>
            <h3 className="w3l-title-main mb-2">{title}</h3>
            <p className="my-4 pe-lg-5">No hay nada mas hermoso como amar a alguien sin miedo ni restricciones.
                Te amare como no el primer sino como el última dia porque lo ultimo que mas quiero es tener siempre un hermoso recuerdo tuyo. Vales mucho y por tanto que has pasado mereces un amor bonito y duradero.
                Te quiero como para estar juntos la vida. Y es que no me canso de ver tu hermosa sonrisa y tus ojos marrones</p>
            {/* <MyInfo
                name={'Jose Moises Villanueva'}
                phone={'+51 926 856 094'}
                email={'jmvilla2301@gmail.com'}
                street={'Lima, Peru'}
            /> */}
            <FollowSocial />
            <div className="w3l-btn">
                <a href="#" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-3">Perfectamente</a>
                <a href="#" className="btn btn-style btn-secondary mt-lg-5 mt-4">Imperfecta</a>
            </div>
        </div>
    );
}