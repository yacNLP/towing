import React from 'react';
import './services.css';
import remorquage from "../../assets/remorquage.jpg";
import accident from "../../assets/accident.jpg";
import moto from "../../assets/moto.jpg";
import gard from "../../assets/gard.jpeg";

export default function Services() {
  const services = [
    {
      image: remorquage,
      title: "Dépannage & Remorquage Auto",
      description: ["Véhicule en panne", "Panne de batterie", "Fourniture de carburant", "Crevaison, changement de pneus"]
    },
    {
      image: accident,
      title: "Véhicule accidenté",
      description: ["Nous procédons au remorquage de votre véhicule en toute sécurité."]
    },
    {
      image: moto,
      title: "Dépannage Moto, Quad",
      description: ["Remorquage de moto, quad, utilitaire"]
    },
    {
      image: gard,
      title: "Gardiennage & Autres services",
      description: ["Service de gardiennage", "Sortie de fourrière", "Transport routier local", "Enlèvement d'épave gratuit"]
    }
  ];

  return (
    <section id='services'>
      <div className="headingSec">
        <h2 className='headingSecTitle'>Nos services</h2>
      </div>
      <div className="servicesContainer">
        {services.map((service, index) => (
          <div key={index} className="serviceBox" style={{ backgroundImage: `url(${service.image})` }}>
            <div className="overlay">
              <h3>{service.title}</h3>
              <ul>
                {service.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
