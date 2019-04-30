import React from 'react';

function About() {
  return(
    <div className="nes-container with-title" id="about">
      <p className="title">About</p>
      <div className="about-container">
        <section className="message -left">
          <div className="review">
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
            <i className="nes-mario"/>
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