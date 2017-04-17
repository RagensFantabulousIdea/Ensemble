import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ProjectShootFullCard extends Component {
  constructor(props) {
    super(props)
    this.updateFrameRange = this.updateFrameRange.bind(this)
    this.updateFrameSelected = this.updateFrameSelected.bind(this)

        this.state = {
            frame_range: '',
            frame_selected: ''
        }
    }

    componentWillReceiveProps(props) {
      this.setState({
        frame_range: props.frame_range || '',
        frame_selected: props.frame_num || ''
      })
    }

    updateFrameRange() {
      fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          frame_range: this.state.frame_range,
          token: sessionStorage.getItem('token')
        })
      })
    }

    updateFrameSelected() {
      fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos/' + this.state.frame_num + '/selected', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: sessionStorage.getItem('token'),
          // QQCollin: Kalea thinks that we need to include frame_num here, but adding it didn't help make it work, so we left our attempts here so you could see what we tried.
          // frame_num: this.props.params.frame_num,
          // frame_num: this.state.frame_num,
          selected: true
        })
      })
    }

    // addFrameNumbers(frame_range, selectionFrame) {
    //   //Post to /api/projects
    //   var token = sessionStorage.getItem('token');
    //   fetch('/api/projects', {
    //     method: 'Post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       frame_range: frame_range,
    //       frame_num: this.state.selectionFrame,
    //       token: token
    //     })
    //   })

    //   .then(response => response.json())
    //   .then(response => {
    //   //  clear the form fields
    //     this.setState({
    //       frame_range: '',
    //       selectionFrame: ''
    //     })
    //   })
    // }

  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-7">
              <h3 className="panel-title">{this.props.figure_num}</h3>
            </div>
            
            <div className="col-xs-5">
              <button type="button" className="btn editCardButton pull-right" onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/editcard')}>Edit Card</button>
            </div>
          </div>
          <br/>
          
          <div className="row">
            <div className="col-xs-8">
              <p>Asset has {this.props.parts} photo(s) associated with it.</p>
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
              {this.props.decorative ?  <p className="photoDecorative">Decorative</p> : ''}
              {this.props.demonstrative ?  <p className="photoDemonstrative">Demonstrative</p> : ''}
            </div>

            <div className="col-xs-6">
              {this.props.portrait ?  <p className="orientationPortrait">Portrait</p> : ''}
              {this.props.landscape ?  <p className="orientationLandscape">Landscape</p> : ''}
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <p><strong>Samples</strong></p>
                <div className="col-xs-6">
                  <img className="shootSampleImage" src="/img/baseballsamplejpg.jpg" alt="sample" />
                </div>

                <div className="col-xs-6">
                  <img className="shootSampleImage"src="/img/baseballsamplejpg.jpg" alt="sample" />
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
                  <input type="text" className="form-control figureFrame" placeholder="DSC05697-DSC05700" value={this.state.frame_range} onChange={(e) => this.setState({frame_range: e.target.value})}/>
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" onClick={this.updateFrameRange}>Save</button>
                    </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <h4 className="figureFrame">Selection Number</h4>
                  <p className="help-block">Note the frame number for the photo that is selected for this asset, exactly as it appears with the thumbnail image (do not include file extension).</p>
                <div className="input-group">
                  <input type="text" className="form-control figureSelectedBox" placeholder="DSC05700" value={this.state.frame_selected} onChange={(e) => this.setState({frame_selected: e.target.value})}/>
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" onClick={this.updateFrameSelected}>Save</button>
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