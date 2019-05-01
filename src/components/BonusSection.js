import React from 'react';

function BonusSection(props) {
  if (props.id === '1') {
    return(
      <div className="bonus-container">
        <img src="http://www.burgr.no/wp-content/uploads/2018/03/28741153_1709890542382542_1926205011_n.jpg" alt="burger" />
        <br />
        <br />
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
        <img src="http://www.burgr.no/wp-content/uploads/2018/03/28811018_1709851409053122_990895645_o.jpg" alt="inside" />
      </div>
    );
  } else if (props.id === '2') {
    return(
      <div className="bonus-container">
        <img src="http://www.burgr.no/wp-content/uploads/2018/03/28721820_1709869545717975_1364282438_n.jpg" alt="gaming" />
        <br />
        <br />
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