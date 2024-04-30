
import BannerView from '@shared/BannerView'
import ContactFormView from './ContactForm/ContactFormView'

const ContactView = ({ addTestimonio }) => {
    return (
        <>
            <BannerView
                backgroundImage='/images/couple7.jpg'
                title='Deseale un Feliz Cumpleaños'
                breadcrumbs={[
                    { text: 'Inicio', link: '/' },
                    { text: 'Felicitame' }
                ]}
            />
            <ContactFormView addTestimonio={addTestimonio} />
        </>
    )
}

export default ContactView
