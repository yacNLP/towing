import React from 'react';
import './aboutUs.css';

export default function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="aboutContainer">
        <h2 className="aboutTitle">À propos de nous</h2>
        <p className="aboutSubtitle">
          Votre partenaire de confiance en dépannage et remorquage, disponible 24/7.
        </p>
        <div className="aboutGrid">
          <div className="aboutItem">
            <div className="aboutIcon">🤝</div>
            <h3>Engagement Client</h3>
            <p>Nous plaçons votre sécurité et votre satisfaction au cœur de nos priorités.</p>
          </div>
          <div className="aboutItem">
            <div className="aboutIcon">🚚</div>
            <h3>Interventions Rapides</h3>
            <p>Nos équipes sont disponibles en permanence pour une assistance immédiate.</p>
          </div>
          <div className="aboutItem">
            <div className="aboutIcon">⏰</div>
            <h3>Disponibilité 24/7</h3>
            <p>Que ce soit de jour ou de nuit, nous sommes là pour vous assister à tout moment.</p>
          </div>
          <div className="aboutItem">
            <div className="aboutIcon">🔒</div>
            <h3>Professionnalisme</h3>
            <p>Avec des années d'expérience, nous vous garantissons un service fiable et sécurisé.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
