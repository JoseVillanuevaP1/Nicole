import { useEffect } from 'react';
import './HomeComponentView.css'
import { initTypedTextEffect } from '@utils/typedTextEffect.js';

const HomeComponentView = () => {

    useEffect(() => {

        // Llamada a la función del efecto de texto tipeado
        initTypedTextEffect(["Mi amor", "Mi niña", "Mi princesa", "Mi todo"]);

        // Cleanup function
        return () => {
            clearTimeout();
        };

    }, []);


    return (
        <>
            <section id="home" className="w3l-banner pt-5">
                <div className="container pt-lg-5 pt-md-4">
                    <div className="row pt-lg-5 pt-4">
                        <div className="col-lg-7 banner-info-grid pt-lg-0 pt-5 HomePageHeroHeader">
                            <h1 className="mb-3">Te deseo un hermoso día</h1>
                            <h3 className="mb-4"> <span className="typed-text"></span><span className="cursor">&nbsp;</span> </h3>
                            <p>Desde que llegaste a mi vida no has dejado de darme los momentos mas felices y bellos. Me encantas princesa 💜</p>

                            <a className="btn btn-primary btn-style mt-5 me-2" href="#url"> Deseame un feliz cumpleaños! </a>
                            {/* <a className="btn btn-style transparent-btn mt-5" href="#url">  </a> */}
                        </div>
                        <div className="col-lg-5 text-lg-end my-image mt-lg-0 mt-5">
                            <img src="/images/couple.png" className="img-fluid" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default HomeComponentView;
