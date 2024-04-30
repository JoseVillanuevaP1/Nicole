import React from "react";
import { FeatureItem } from "./FeatureItem";

const features = [
    { icon: "fas fa-sun", title: "Radiante", description: "Brillas como nadie mas cuando asi lo deseas." },
    { icon: "fa fa-heart", title: "Cariñosa", description: "Eres un amor con las personas que amas." },
    { icon: "fa fa-heart", title: "Divina", description: "Ya mucho te estoy halagando creo... lo eres." },
    { icon: "fa fa-snowflake", title: "Simpatica", description: "Le caes muy buen a todos por como eres." },
    { icon: "fa fa-moon", title: "Renegona", description: "Y como no si te hago renegar jaja lo eres." },
    { icon: "fa fa-heart", title: "Perfecta", description: "En resumen perfectamente perfecta para mi." }
];


export const FeatureItems = () => {
    return (
        <div className="row two-grids">
            {features.map((feature, index) => (
                <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
        </div>
    );
};