import React, { Component } from 'react';

class ProjectPhotoCollaboratingPhotoCard extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to make it so you can click on the image in the card and see the large size of the photo.

//need to figure out how to make selection buttons work.

// suggested JS for the tooltips on the glyphicons
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

            <div className="panel">
            
                <div className="panel-body imagePanel">
                    <img src="./img/baseballhitter.jpg" alt="shoot result"/>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-12 text-centered">
                            <p>useJStoPlaceFrameNumber</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xs-4">
                            <a className="couldSelect"><span className="glyphicon glyphicon-trash" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Delete photo"></span></a>
                        </div>
                        
                        <div className="col-xs-4">
                            <a className="doNotSelect"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Don't select"></span></a>
                        </div>

                        <div className="col-xs-4">
                            <a className="couldSelect"><span className="glyphicon glyphicon-check pull-right" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="I like it!"></span></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default ProjectPhotoCollaboratingPhotoCard;