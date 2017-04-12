import React, { Component } from 'react';

class ProjectShootFullCard extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.
    return (
              
            <div className="panel">
              <div className="panel-heading">
                
                <div className="row">
                  <div className="col-xs-7">
                    <h3 className="panel-title">Figure BB.BB</h3>
                  </div>

                    <div className="col-xs-5">
                      <button type="submit" className="btn editCardButton pull-right">Edit Card</button>
                    </div>
                </div>
              <br/>
                <div className="row">
                  <div className="col-xs-8">
                    <p>Figure has [2] photo(s) associated with it.</p>
                  </div>

                  <div className="col-xs-4">
                    <p className="orderNumberPersisted pull-right"><strong>Order: 1</strong></p>
                  </div>
                </div>
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
                <div className="col-xs-6">
                  <p><strong>Models: </strong>Pull card build.</p>
                </div>

                <div className="col-xs-6">
                  <p><strong>Equipment: </strong>Pull the equipment from the card build.</p>
                </div>
              </div>

              <div clasName="row">
                <p><strong>Photographer: </strong>Pull the photographer from the card build.</p>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  <p><strong>Decorative</strong></p>
                  <p><strong>Demonstrative</strong></p>
                </div>

                <div className="col-xs-6">
                  <p><strong>Portrait</strong></p>
                  <p><strong>Landscape</strong></p>
                </div>

              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Samples</strong></p>
                    <div className="col-xs-3">
                      <img className="shootSampleImage" src="./img/baseballsamplejpg.jpg" alt="sample" />
                    </div>
                
                    <div className="col-xs-3">
                      <img className="shootSampleImage"src="./img/baseballsamplejpg.jpg" alt="sample" />
                    </div>

                    <div className="col-xs-3">
                      <img className="shootSampleImage"src="./img/baseballsamplejpg.jpg" alt="sample" />
                    </div>

                    <div className="col-xs-3">
                      <img className="shootSampleImage"src="../img/baseballsamplejpg.jpg" alt="sample" />
                    </div>
                </div>
              </div>
              </div>
            
              <div className="panel-footer">
                <div className="row">
                  <div className="col-xs-12">
                    <h4 className="figureSelectedTitle">Camera Frame Number</h4>
                      <p className="help-block">During the shoot, note the range of frame numbers for all of the shots taken for this photo.</p>
                        <div className="input-group">
                          <input type="text" className="form-control figureSelectedBox" placeholder="DSC05697-DSC05700"/>
                            <span className="input-group-btn">
                              <button className="btn btn-success" type="button">Save</button>
                            </span>
                        </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <h4 className="figureFrame">Selection Number</h4>
                      <p className="help-block">Note the frame number for the photo that is selected for this figure.</p>
                        <div className="input-group">
                          <input type="text" className="form-control figureFrame" placeholder="DSC05700"/>
                            <span className="input-group-btn">
                              <button className="btn btn-success" type="button">Save</button>
                            </span>
                        </div>
                  </div>
                </div>
              </div>
 
            </div>

    );
  }
}

export default ProjectShootFullCard;