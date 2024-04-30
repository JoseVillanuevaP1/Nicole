import React from 'react';
import { ContactInfo } from './ContactInfo';
import { SocialIcons } from './SocialIcons';

const Logo = () => {
    return (
        <div className="footer-logo">
            <a className="logo" href="/">
                <i className="fa fa-birthday-cake"></i> Feliz cumpleaños Nicole 💜
            </a>
        </div>
    );
}

const FooterView = () => {
    return (
        <footer className="footer text-center">
            <div className="footer py-5">
                <div className="container py-md-4 UiportfolioFooter">
                    <Logo />
                    <ContactInfo
                        phone={'+51 926 856 094'}
                        email={'jmvilla2301@gmail.com'}
                        street={'Villa el Salvador, Lima, Peru'}
                    />
                </div>
            </div>
        </footer>
    );
}

export default FooterView;