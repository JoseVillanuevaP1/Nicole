import React from 'react';
import { SkillItem } from './SkillItem';
import { TextShpere } from './TextShpere';

const SkillsView = () => {
    return (
        <>
            <section className="w3l-skills py-4" id="skills">
                <div className="container py-lg-5 py-md-4 py-3 HomePageSkills">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-5 mt-2">
                            {/* <img src="/src/assets/images/about2.jpg" alt="" className="img-fluid" /> */}
                            <TextShpere />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5 w3l-content-6 px-lg-4 align-self-center">
                            <h6 className="w3l-title-small mb-2">Simplemente tú</h6>
                            <h3 className="w3l-title-main">Como te ven mis ojos</h3>
                            <p className="my-4">Si supieras como te veo sin dudas no dejarías de mirarte, eres la luz que ilumnima mi camino.</p>
                            <SkillItem title="Graciosa, divertida & simpática" progress={80} />
                            <SkillItem title="Cariñosa & Amable" progress={90} />
                            <SkillItem title="Renegona & Enojona" progress={60} />
                            <SkillItem title="Molesta & Picona" progress={80} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillsView;
