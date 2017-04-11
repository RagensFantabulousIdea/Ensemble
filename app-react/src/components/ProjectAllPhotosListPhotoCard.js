import React, { Component } from 'react';

class ProjectAllPhotosListPhotoCard extends Component {
  render() {

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">

            <div className="panel imagePanel">
            
                <div className="panel-body">
                    <img src="./img/balletEmbrace.jpg" alt="shoot result"/>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-12 text-is-centered">
                            <p>useJStoPlaceFrameNumber</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default ProjectAllPhotosListPhotoCard;