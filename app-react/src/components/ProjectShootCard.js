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
                <div className="col-xs-6">
                  <h4>Description</h4>
                    <p>Pull the description from the card build.</p>
                </div>

                <div className="col-xs-3">
                  <h5>Decorative</h5>
                  <h5>Demonstrative</h5>
                </div>

                <div className="col-xs-3">
                  <h5>Portrait</h5>
                  <h5>Landscape</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <h4>Instructions</h4>
                    <p>Pull the instructions from the card build. It might be a numbered list. But Kalea is handling that. There might be several lines to this, so I am putting it in its own column within the row . . .</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  <h4>Models</h4>
                    <p>Pull card build.</p>
                </div>

                <div className="col-xs-6">
                  <h4>Equipment</h4>
                    <p>Pull the equipment from the card build. Might look like an unordered list if Kalea gets that working.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-3">
                  <h4>Location</h4>
                    <p>Pull card build.</p>
                </div>

                <div className="col-xs-3">
                  <h4>Date</h4>
                    <p>Pull card build.</p>
                </div>

                <div className="col-xs-3">
                  <h4>Time</h4>
                    <p>Pull card build.</p>
                </div>

                <div className="col-xs-3">
                  <h4>Multi-Parts</h4>
                    <p>Figure has BB Parts</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <h4>Samples</h4>
                    <div className="col-xs-3">
                      <img src="./img/baseballhitter.jpg" alt="sample" width="140px" />
                    </div>
                
                    <div className="col-xs-3">
                      <img src="./img/baseballhitter.jpg" alt="sample" width="140px" />
                    </div>

                    <div className="col-xs-3">
                      <img src="./img/baseballhitter.jpg" alt="sample" width="140px" />
                    </div>

                    <div className="col-xs-3">
                      <img src="./img/baseballhitter.jpg" alt="sample" width="140px" />
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