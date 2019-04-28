import React from 'react';

function About() {
  return(
    <div className="nes-container with-title">
      <p className="title">About</p>
      <section className="message -left">
        <i class="nes-mario"/>
        <div className="nes-balloon from-left">
          <p>
            Best burgr in town!
            <i class="nes-icon is-small star"/>
            <i class="nes-icon is-small star"/>
            <i class="nes-icon is-small star"/>
            <i class="nes-icon is-small star"/>
            <i class="nes-icon is-small star"/>
          </p>
        </div>
        <span className="nes-text is-primary">
          -Some guy who kind of likes burgrs.
        </span>
      </section>
    </div>
  );
}

export default About;