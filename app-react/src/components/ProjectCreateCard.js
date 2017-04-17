import React, { Component } from 'react';
import NavBar from './NavBar';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';

//Need to add quotes around user input for photo selected box?

// where it says "addPhoto", it used to say "addProject".
//where it says "deletePhoto", it used to say "deleteProject".
//where it says "getDecorative", "getDemonstrative", "getOrientationPortrait", or "getOrientationLandscape" it used to say "getProjects"

class ProjectCreateCard extends Component {
    constructor(props) {
        super(props)
        this.saveAsset = this.saveAsset.bind(this)

        this.state = {
            figureNumber: '',
            figureParts: '',
            selectionFrame: '',
            orderNumber: '',
            figureDescription: '',
            figureInstructions: '',
            figureEquipment: '',
            photo_model: '',
            photographer: '',
            shootLocation: '',
            shootDate: '',
            shootTime: '',
            photoDecorative: '',
            photoDemonstrative: '',
            orientationPortrait: '',
            orientationLandscape: ''
        }
    }

    saveAsset() {

        //Post to /api/projects
        var token = sessionStorage.getItem('token');
        fetch('/api/projects/' + this.props.params.projectId + '/assets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                figure_num: this.state.figureNumber,
                parts: this.state.figureParts,
                frame_num: this.state.selectionFrame,
                order_num: this.state.orderNumber,
                asset_description: this.state.figureDescription,
                instructions: this.state.figureInstructions,
                equipment: this.state.figureEquipment,
                photo_model: this.state.photo_model,
                photographer: this.state.photographer,
                location_of_shoot: this.state.shootLocation,
                date_of_shoot: this.state.shootDate,
                time_of_shoot: this.state.shootTime,
                decorative: this.state.photoDecorative,
                demonstrative: this.state.photoDemonstrative,
                portrait: this.state.orientationPortrait,
                landscape: this.state.orientationLandscape,
                token: token
            })
        })
        
        .then(response => response.json())
        .then(asset => {
            browserHistory.push('/shoot/' + this.props.params.projectId)
        })
    }

    render() {

    return (
        <div className="projectCreateCard">
            <NavBar />

            <h1>Photo Shoot Planning Card</h1>

            <div className="container">
                <div className="panel">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="figureNumber">Asset Number</label>
                                    <input type="text" className="form-control figureNumber" placeholder="Asset 1.1" onChange={(e) => this.setState({figureNumber: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="figureParts">If this asset is part of a multi-part figure, how many parts are in the figure including the one for this asset?</label>
                                    <input type="text" className="form-control figureParts" placeholder="1" onChange={(e) => this.setState({figureParts: e.target.value})}/>
                                </div>

                            </div>

                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="figureSelection">Asset Selection Frame Number</label>
                                    <input type="text" className="form-control figureSelection" placeholder="DSC05697" onChange={(e) => this.setState({selectionFrame: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="figureOrder">Order Number (within the photo shoot)</label>
                                    <input type="text" className="form-control figureOrder" placeholder="1" onChange={(e) => this.setState({orderNumber: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-body">
                        <form>              
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="figureDescription">Asset Description</label>
                                        <textarea type="text" className="form-control figureDescription"  placeholder="child swinging baseball bat" onChange={(e) => this.setState({figureDescription: e.target.value})}></textarea>
                                    </div>
                                </div> 
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="figureInstructions">Instructions (for posing the models)</label>
                                        <textarea type="text" className="form-control figureInstructions"  placeholder="Stand with feet hip-width apart, facing home base, body angled towards the pitchers mound . . ." onChange={(e) => this.setState({figureInstructions: e.target.value})}></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="figureEquipment">Equipment</label>
                                        <textarea type="text" className="form-control figureEquipment"  placeholder="baseball bat, batting helmet, batting gloves . . ."onChange={(e) => this.setState({figureEquipment: e.target.value})}></textarea>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="photo_model">Model Information</label>
                                        <textarea type="text" className="form-control figureModel"  placeholder="boy, 10 years old" onChange={(e) => this.setState({photo_model: e.target.value})}></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="figurePhotographer">Photographer</label>
                                        <input type="text" className="form-control figurePhotographer" onChange={(e) => this.setState({photographer: e.target.value})}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="figureLocation">Location of Shoot</label>
                                        <textarea type="text" className="form-control figureLocation" placeholder="Champaign, IL, Kirby Park baseball field, batting box" onChange={(e) => this.setState({shootLocation: e.target.value})}></textarea>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="figureDate">Date of Shoot</label>
                                        <input type="text" className="form-control figureDate" placeholder="March 15" onChange={(e) => this.setState({shootDate: e.target.value})}/>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="figureTime">Time of Shoot</label>
                                        <input type="text" className="form-control figureTime" placeholder="1-5 PM" onChange={(e) => this.setState({shootTime: e.target.value})}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="checkbox figureDeco">
                                        <label>
                                            <input type="checkbox" onChange={(e) => this.setState({photoDecorative: e.target.checked})} /> Decorative photo?
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="checkbox figureDemo">
                                        <label>
                                            <input type="checkbox" onChange={(e) => this.setState({photoDemonstrative: e.target.checked})} /> Demonstrative photo?
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="checkbox figurePortrait">
                                        <label>
                                            <input type="checkbox" onChange={(e) => this.setState({orientationPortrait: e.target.checked})} /> Portrait orientation?
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="checkbox figureLandscape">
                                        <label>
                                            <input type="checkbox" onChange={(e) => this.setState({orientationLandscape: e.target.checked})} /> Landscape orientation?
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="figureSample">Upload Sample</label>
                                        <p className="help-block">You can upload sample images to guide the models and photographer.</p>
                                        <input type="file" className="figureSample"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            {/*<div className="col-xs-6">
                                <button type="button" className="btn btn-danger deleteFigure" onClick={() => this.deletePhoto(this.props.id)}>Delete Asset</button>
                            </div>*/}

                            <div className="col-xs-12">
                                <button type="button" className="btn btn-success pull-right saveFigure" onClick={this.saveAsset}>Save Asset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </div>
    );
  }
}

export default ProjectCreateCard;