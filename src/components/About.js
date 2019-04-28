import React from 'react';

function About() {
  return(
    <div className="nes-container with-title">
      <p className="title">About</p>
      <div className="about-container">
        <section className="message -left">
          <div className="review">
            <i className="nes-mario"/>
            <div className="nes-balloon from-left">
              <p>
                Best burgr in town!
                <i className="nes-icon is-small star"/>
                <i className="nes-icon is-small star"/>
                <i className="nes-icon is-small star"/>
                <i className="nes-icon is-small star"/>
                <i className="nes-icon is-small star"/>
              </p>
            </div>
          </div>
          <span className="nes-text is-primary">
            -Some guy who kind of likes burgrs.
          </span>
        </section>
      </div>
    </div>
  );
}

export default About;