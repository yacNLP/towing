import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contactContainer">
        <h2 className="contactTitle">Contactez-nous</h2>
        
        <div className="contactGrid">
          <div className="contactItem">
            <span className="contactIcon">📍</span>
            <h3>Adresse du garage</h3>
            <p>3 rue Pérou, 44840 Sorinières</p>
          </div>
          
          <div className="contactItem">
            <span className="contactIcon">📞</span>
            <h3>Appelez-nous</h3>
            <a href="tel:+33601020304" className="contactPhone">06 77 06 80 56</a>
          </div>
          
          <div className="contactItem">
            <span className="contactIcon">✉️</span>
            <h3>Email</h3>
            <a href="mailto:contact@depannage-nantes.fr" className="contactEmail">contact@depannage-nantes.fr</a>
          </div>
        </div>
      </div>
    </section>
  );
}
