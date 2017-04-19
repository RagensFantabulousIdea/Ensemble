import React, { Component } from 'react';

class FullSizedImageView
 extends Component {
  render() {
    return (
        <div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <img src={decodeURIComponent(location.href.split('?')[1].replace('src=', ''))} alt="shoot result" />
        </div>
    );
  }
}

export default FullSizedImageView;