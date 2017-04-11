import React, { Component } from 'react';

class FullSizedImageView
 extends Component {
  render() {

    return (
        <div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <img src="./img/hotairballoon241642_1920.jpg" alt="shoot result" />
        </div>
    );
  }
}

export default FullSizedImageView;