import React, { Component } from 'react';

class ProjectShootCard extends Component {
  render() {

     //users fill out figure information in CreateCard, it goes here to ProjectShootCard. Then ProjectShootCards gets placed in a list on ProjectShoot.
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
              
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Figure BB.BB (pull from form)</h3>
              </div>
              
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-6">
                  <h4>Description</h4>
                    <p>Pull the description from the card build.</p>
                </div>

                <div className="col-sm-6">
                  <h4>Instructions</h4>
                    <p>Pull the instructions from the card build. It might be a numbered list. But Kalea is handling that . . .</p>
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