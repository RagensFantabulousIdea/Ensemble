import React, { Component } from 'react';

class FullSizedImageView
 extends Component {
  render() {
    return (
        <div>
            <img src={decodeURIComponent(location.href.split('?')[1].replace('src=', ''))} alt="shoot result" />
        </div>
    );
  }
}

export default FullSizedImageView;