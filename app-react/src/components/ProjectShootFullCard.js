import React, { Component } from 'react';
import SampleUploader from './SampleUploader';
import SamplePhotoCard from './SamplePhotoCard';
import { browserHistory } from 'react-router';

class ProjectShootFullCard extends Component {
    constructor(props) {
        super(props)
        this.updateFrameRange = this.updateFrameRange.bind(this)
        this.updateFrameSelected = this.updateFrameSelected.bind(this)
        this.getImages = this.getImages.bind(this)

        this.state = {
            frame_range: '',
            selected_photo: '',
            sample_photos: []
        }
    }

    componentDidMount(){
        this.getImages()
    }

    componentWillReceiveProps(props) {
        this.setState({
            frame_range: props.frame_range || '',
            selected_photo: props.selected_photo ? props.selected_photo.frame_num : ''
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
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos/' + this.state.selected_photo + '/selected', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: sessionStorage.getItem('token'),
                selected: true
            })
        })
    }

    getImages(){
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'))
        // console.log(token)
        .then(response => response.json())
        .then(response => {
            //console.log(response)
            this.setState(response)
        })
    }
  
  render(){
      //console.log(this.state.images)
      let sample_photos = this.state.sample_photos.map((photo, key) => <SamplePhotoCard key={Date.now() + key} index={key}  image={photo.image} projectId={this.props.params.projectId} assetId={this.props.params.assetId} photoId={photo.id} frame_num={photo.frame_num} />)

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
                    <br />

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
                            <p><strong>Location: </strong>{this.props.location_of_shoot}</p>
                        </div>

                        <div className="col-xs-4">
                            <p><strong>Date: </strong>{this.props.date_of_shoot}</p>
                        </div>

                        <div className="col-xs-4">
                            <p><strong>Time: </strong>{this.props.time_of_shoot}</p>
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
                            <p><strong>Models: </strong>{this.props.photo_model}</p>
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
                            {this.props.decorative ? <p className="photoDecorative">Decorative</p> : ''}
                            {this.props.demonstrative ? <p className="photoDemonstrative">Demonstrative</p> : ''}
                        </div>

                        <div className="col-xs-6">
                            {this.props.portrait ? <p className="orientationPortrait">Portrait</p> : ''}
                            {this.props.landscape ? <p className="orientationLandscape">Landscape</p> : ''}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-group">
                                <label htmlFor="figureSample">Upload Sample</label>
                                <p className="help-block">You can upload sample images to guide the models and photographer.</p>
                                <SampleUploader getImages={this.getImages} {...this.props} />
                            </div>

                            <div className="row">
                                {sample_photos}
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
                                <input type="text" className="form-control figureFrame" placeholder="DSC05697-DSC05700" value={this.state.frame_range} onChange={(e) => this.setState({ frame_range: e.target.value })} />
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
                                <input type="text" className="form-control figureSelectedBox" placeholder="DSC05700" value={this.state.selected_photo} onChange={(e) => this.setState({ selected_photo: e.target.value })} />
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