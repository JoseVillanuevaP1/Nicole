
import { ContactFormMain } from './ContactFormMain';

const ContactFormHeader = () => {
    return (
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 ContactPageForm">
            <h3 className="w3l-title-main">Que deseas decirle?</h3>
        </div>
    );
};

// Componente principal del formulario de contacto
const ContactFormView = ({ addTestimonio }) => {
    return (
        <section className="w3l-contacts-12">
            <div className="contact-top pt-5">
                <div className="container py-lg-5 py-2 ContactPageSection">
                    <ContactFormHeader />
                    <div className="d-grid cont-main-top">
                        <ContactFormMain addTestimonio={addTestimonio} />
                    </div>
                </div>
                {/* Aqui esta el mapa XD */}
                {/* <MapView /> */}
            </div>
        </section>
    );
};

export default ContactFormView;
