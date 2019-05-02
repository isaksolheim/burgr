import React from 'react';

function BonusSection(props) {
  if (props.id === '1') {
    return(
      <div className="nes-container bonus-container bonus1">
        <div>
        </div>
        <div>
          <div className="bonus-text">
            <h4>
              Come hungry.
              <br />
              Leave happy.
            </h4>
          </div>
          <div className="mario-review">
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
      </div>
    );
  } else if (props.id === '2') {
    return(
      <div className="nes-container bonus-container bonus2">
        <div className="bonus-text">
          <h2>
            BURGRS; 
            <br />
            SHAKES AND GAMES
          </h2>
          <p>
            Retro games and Burgrs, what else do you need?
          </p>
        </div>
      </div>
    );
  }
}

export default BonusSection;