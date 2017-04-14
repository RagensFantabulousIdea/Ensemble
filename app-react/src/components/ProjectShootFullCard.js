import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import ProjectPhotoCollaborating from './ProjectPhotoCollaborating';

class ProjectShootFullCard extends Component {

// original list from projectcreatecard

    // figure_num: this.state.figureNumber,
  // parts: this.state.figureParts,
  // frame_num: this.state.uploadedFrame,
  // order_num: this.state.orderNumber,
  // asset_description: this.state.figureDescription,
  // instructions: this.state.figureInstructions,
  // equipment: this.state.figureEquipment,
  // model: this.state.figureModel,
  // photographer: this.state.photographer,
  // location_of_shoot: this.state.shootLocation,
  // date_of_shoot: this.state.shootDate,
  // time_of_shoot: this.state.shootTime,
  // decorative: this.state.photoDecorative,
  // demonstrative: this.state.photoDemonstrative,
  // portrait: this.state.orientationPortrait,
  // landscape: this.state.orientationLandscape,
  // asset: this.state.asset, //not sure this is right. in todos, it was todo: this.state.description
  // token: token
  
  // new ones on project shoot full card
  // frame_range: frame_range,
  // frame_selected: this.state.selectionFrame

  //new one on this page?
//   something to do with frame of uploaded photo?

  //plus photos . . .
  //plus ability to mark photos yes, no, trash
  //plus messages . . .

  constructor(props) {
    super(props)
        this.state = {
            frame_range: '',
            selectionFrame: '',
            token: '',
        }
    }

// QQCollin: there were a couple of new fields (and maybe a third?) on here for fields I wanted them to fill out at the shoot. But . . . where does this addFrameNumbers thingie get called since there's no one big save button like there was for the ProjectCreateCard file? no one will see this card on its own, it gets used on the PhotoShootCollaborating.js file.

  //new one on this page?
//   something to do with frame of uploaded photo? 
    addFrameNumbers(frame_range, selectionFrame) {
      //Post to /api/projects
          var token = sessionStorage.getItem('token');
          fetch('/api/projects', {
              method: 'Post',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  frame_range: frame_range,
                  frame_num: this.state.selectionFrame,
                  token: token
              })
          })
              .then(response => response.json())
              .then(response => {
                  //  clear the form fields
                  this.setState({
                      frame_range: '',
                      selectionFrame: ''
                  })
              })
    }


  render() {
    console.log(this.props)
//need to add quotes to user input for selected frame number??
    return (
            <div className="panel">
              <div className="panel-heading">
                
                <div className="row">
                  <div className="col-xs-7">
                    <h3 className="panel-title">{this.props.figure_num}</h3>
                  </div>

                    <div className="col-xs-5">
                      <button type="button" className="btn editCardButton pull-right" onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId + 'assets' + this.props.params.assetId + '/createcard')}>Edit Card</button>
                    </div>
                </div>
              <br/>
                <div className="row">
                  <div className="col-xs-8">
                    <p>Figure has {this.props.parts} photo(s) associated with it.</p>
                  </div>

                  <div className="col-xs-4">
                    <p className="orderNumberPersisted pull-right"><strong>Order: {this.props.order_num}</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-4">
                    <p>{this.props.location_of_shoot}</p>
                  </div>

                  <div className="col-xs-4">
                    <p>{this.props.date_of_shoot}</p>
                  </div>

                  <div className="col-xs-4">
                    <p>{this.props.time_of_shoot}</p>
                  </div>
              
                </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Description: </strong><span>{this.props.asset_description}</span></p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Instructions: </strong>{this.props.instructions}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  <p><strong>Models: </strong>{this.props.model}</p>
                </div>

                <div className="col-xs-6">
                  <p><strong>Equipment: </strong>{this.props.equipment}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Photographer: </strong>{this.props.photographer}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  {this.props.decorative === this.props.decorative ?  <p className="photoDecorative">Decorative</p> : ''}
                  {this.props.demonstrative === this.props.demonstrative ?  <p className="photoDemonstrative">Demonstrative</p> : ''}
                </div>

                <div className="col-xs-6">
                {this.props.portrait === this.props.portrait ?  <p className="orientationPortrait">Portrait</p> : ''}
                {this.props.landscape === this.props.landscape ?  <p className="orientationLandscape">Landscape</p> : ''}
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
                    <h4 className="figureSelectedTitle">Camera Frame Numbers</h4>
                      <p className="help-block">During the shoot, note the range of frame numbers for all of the shots taken for this photo.</p>
                        <div className="input-group">
                          <input type="text" className="form-control figureFrame" placeholder="DSC05697-DSC05700" onChange={(e) => this.setState({frame_range: e.target.value})}/>
                            <span className="input-group-btn">
                              <button className="btn btn-success" type="button">Save</button>
                            </span>
                        </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <h4 className="figureFrame">Selection Number</h4>
                      <p className="help-block">Note the frame number for the photo that is selected for this figure, exactly as it appears with the thumbnail image.</p>
                        <div className="input-group">
                          <input type="text" className="form-control figureSelectedBox" placeholder="DSC05700" onChange={(e) => this.setState({frame_selected: e.target.value})}/>
                          {/* api/projects/id/assets/id/photos/id/selection */}
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