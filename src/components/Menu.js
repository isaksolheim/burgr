import React from 'react';

class Menu extends React.Component {
  viewImage(imgId) {
    var modal = document.getElementById('modal');
    var img = document.getElementById(imgId);
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }

  closeImage() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  render() {
    return(
      <div className="nes-container with-title" id="menu">
        <p className="title">Menu</p>
        <div className="img-container">
          <img onClick={() => this.viewImage('burgers')} id="burgers" src="burgr-2018-meny-burgers.jpg" alt="burgr menu" />
          <img onClick={() => this.viewImage('extras')} id="extras" src="burgr-2018-meny-extras.jpg" alt="extas menu" />
        </div>
        <div id="modal" className="modal">
          <span onClick={this.closeImage} className="close">&times;</span>
          <img className="modal-content" id="img01" alt="menu" />
          <div id="caption"></div>
        </div>
      </div>
    );
  }
}

export default Menu;