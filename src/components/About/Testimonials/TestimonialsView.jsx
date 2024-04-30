import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'

const Testimonials = ({ testimonial }) => {

    useEffect(() => {
        return () => {
            document.querySelector('.slick-list')?.removeAttribute('style');
        };
    }, []);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className="w3l-clients" id="testimonials">
            <div className="midd-w3 py-5">
                <div className="container py-lg-5 py-md-3 AboutPageTestimonials">

                    <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                        <span className="w3l-title-small">Tus saludos</span>
                        <h3 className="w3l-title-main">Te desean un feliz cumpleaños</h3>
                    </div>

                    <div id="owl-demo1" className="owl-carousel owl-theme mt-4 pt-2 mb-5">
                        <Slider {...settings}>
                            {testimonial.map((testimonial, index) => (
                                <div key={index}>
                                    <div className="item mx-3">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <blockquote>
                                                    <q>{testimonial.description}</q>
                                                </blockquote>
                                                <div className="testi-des">
                                                    <div className="test-img">
                                                        <img src={`/images/${testimonial.avatar}.jpg`} className="img-fluid" alt="client-img" />
                                                    </div>
                                                    <div className="peopl align-self">
                                                        <h3>{testimonial.name}</h3>
                                                        <p className="indentity">{testimonial.relationship}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Testimonials;
