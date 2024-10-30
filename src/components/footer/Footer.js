import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footerContainer">
        <p className="footerText">&copy; 2024 Garage Dépannage Nantes. Tous droits réservés.</p>
        
        <p className="footerContact">3 rue Pérou, 44840 Sorinières | Tel: <a href="tel:+33677068056">06 77 06 80 56</a></p>
      </div>
    </footer>
  );
}
