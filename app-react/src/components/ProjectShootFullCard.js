import React, { Component } from 'react';

class ProjectShootFullCard extends Component {

  constructor(props) {
    super(props)
        this.state = {
            frame_range: '',
            selectionFrame: '',
            token: '',
        }
    }

// QQCollin: there were a couple of new fields on here for fields I wanted them to fill out at the shoot. But . . . where does this addFrameNumbers thingie get called since there's no one big save button like there was for the ProjectCreateCard file? no one will see this card on its own, it gets used on the PhotoShootCollaborating.js file. 
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

//need to add quotes to user input for selected frame number??
    return (
            <div className="panel">
              <div className="panel-heading">
                
                <div className="row">
                  <div className="col-xs-7">
                    <h3 className="panel-title">{this.props.figureNumber}</h3>
                  </div>

                    <div className="col-xs-5">
                      <button type="submit" className="btn editCardButton pull-right">Edit Card</button>
                    </div>
                </div>
              <br/>
                <div className="row">
                  <div className="col-xs-8">
                    <p>Figure has {this.props.figureParts} photo(s) associated with it.</p>
                  </div>

                  <div className="col-xs-4">
                    <p className="orderNumberPersisted pull-right"><strong>Order: {this.props.orderNumber}</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-4">
                    <p>{this.props.shootLocation}</p>
                  </div>

                  <div className="col-xs-4">
                    <p>{this.props.shootDate}</p>
                  </div>

                  <div className="col-xs-4">
                    <p>{this.props.shootTime}</p>
                  </div>
              
                </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Description: </strong><span>{this.props.figureDescription}</span></p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <p><strong>Instructions: </strong>{this.props.figureInstructions}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  <p><strong>Models: </strong>{this.props.figureModel}</p>
                </div>

                <div className="col-xs-6">
                  <p><strong>Equipment: </strong>{this.props.figureEquipment}</p>
                </div>
              </div>

              <div clasName="row">
                <p><strong>Photographer: </strong>{this.props.photographer}</p>
              </div>

              <div className="row">
                <div className="col-xs-6">
                  {this.props.photoDecorative === this.props.photoDecorative ?  <p className="photoDecorative">Decorative</p> : ''}
                  {this.props.photoDemonstrative === this.props.photoDemonstrative ?  <p className="photoDemonstrative">Demonstrative</p> : ''}
                </div>

                <div className="col-xs-6">
                {this.props.photoDecorative === this.props.photoDecorative ?  <p className="orientationPortrait">Portrait</p> : ''}
                {this.props.photoDecorative === this.props.photoDecorative ?  <p className="orientationLandscape">Landscape</p> : ''}
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
                      <p className="help-block">Note the frame number for the photo that is selected for this figure.</p>
                        <div className="input-group">
                          <input type="text" className="form-control figureSelectedBox" placeholder="DSC05700" onChange={(e) => this.setState({selectionFrame: e.target.value})}/>
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