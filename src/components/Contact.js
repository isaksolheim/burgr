import React from 'react';

function Contact() {
  return(
    <div className="nes-container with-title">
      <p className="title">Contact</p>
      <div className="contact">
        <div className="visit">
          <i class="nes-logo"/>
          <div className="contact-title">
            Visit
          </div>
          <p>Skippergata 6A, 9008 Tromsø</p>
        </div>  
        <div className="contact-us">
          <i class="snes-logo"/>
          <div className="contact-title">
            Contact
          </div>
          <p>POST@BURGR.NO</p>
        </div>
        <p>
          All orders are done in the shop. We do not
          take table reservation.
        </p>
      </div>
    </div>
  );
}

export default Contact;