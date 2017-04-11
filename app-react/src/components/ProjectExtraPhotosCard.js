import React, { Component } from 'react';

class ProjectExtraPhotosCard extends Component {
  render() {

//can users assign a photo from this list to an existing figure or start a new figure from a photo, and have it move from the Extras page to that existing or new figure?

// need to figure out how to make it so you can click on the image in the card and see the large size of the photo.

//need to figure out how to make selection buttons work.

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <div className="panel panel-default">
            
                <div className="panel-body">
                    <img src="./img/diving-79616_1920.jpg" alt="shoot result"/>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-12 text-is-centered">
                            <p>useJStoPlaceFrameNumber</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <span className="input-group-btn">
                                <button className="btn moveToFigure" type="button">Add to Figure</button>
                            </span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="input-group-btn">
                                <button className="btn moveToNewFigure" type="button">Add to New Figure</button>
                            </span>                 
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-xs-4">
                            <a className="couldSelect"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                        </div>
                        
                        <div className="col-xs-4">
                            <a className="doNotSelect"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></a>
                        </div>

                        <div className="col-xs-4">
                            <a className="couldSelect"><span className="glyphicon glyphicon-check" aria-hidden="true"></span></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default ProjectExtraPhotosCard;