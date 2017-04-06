import React, { Component } from 'react';

class ProjectShootCard extends Component {
  render() {

     //users fill out figure information in CreateCard, it goes here to ProjectShootCard. Then ProjectShootCards gets placed in a list on ProjectShoot.
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-7">
              
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Figure BB.BB (pull from form)</h3>
              </div>
              
            <div className="panel-body">

              <div className="row">
                <div className="col-xs-4">
                  <p>Pull location from backend.</p>
                </div>

                <div className="col-xs-4">
                  <p>Pull date from backend.</p>
                </div>

                <div className="col-xs-4">
                  <p>Pull time from backend.</p>
                </div>
              
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Description: </strong><span>Pull the description from the card build.</span></p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Instructions: </strong>Pull the instructions from the card build. There might be several lines to this, so I am putting it in its own column within the row . . .</p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xs-4">
                  <p><strong>Decorative</strong></p>
                  <p><strong>Demonstrative</strong></p>  
                </div>

                <div className="col-xs-4">
                  <p><strong>Portrait</strong></p>
                  <p><strong>Landscape</strong></p>
                </div>

                <div className="col-xs-4">
                  <p><strong>"Figure has [pull the number] part(s)"</strong></p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  <p><strong>Models: </strong>Pull card build.</p>
                </div>

                <div className="col-xs-6">
                  <p><strong>Equipment: </strong>Pull the equipment from the card build.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Samples</strong></p>
                    <div className="col-xs-3">
                      <img className="shootSampleImage" src="./img/baseballhitter.jpg" alt="sample" />
                    </div>
                
                    <div className="col-xs-3">
                      <img className="shootSampleImage"src="./img/baseballhitter.jpg" alt="sample" />
                    </div>

                    <div className="col-xs-3">
                      <img className="shootSampleImage"src="./img/baseballhitter.jpg" alt="sample" />
                    </div>

                    <div className="col-xs-3">
                      <img className="shootSampleImage"src="./img/baseballhitter.jpg" alt="sample" />
                    </div>
                </div>
              </div>
            </div>
            
            <div className="panel-footer">
              <div className="form-group">
                <label for="figureFrame">Camera Frame</label>
                <p className="help-block">During the shoot, note the selection frame number or range of frame numbers if not selected.</p>
                <input type="text" className="form-control figureFrame" placeholder="DSC05697-DSC05700"/>
              </div>
            </div>

            
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ProjectShootCard;