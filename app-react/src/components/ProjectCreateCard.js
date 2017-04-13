import React, { Component } from 'react';
import NavBar from './NavBar';
import NavAdditionalPager from './NavAdditionalPager';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// where it says "addPhoto", it used to say "addProject".

class ProjectCreateCard extends Component {
    constructor(props) {
        super(props)
        this.addPhoto = this.addPhoto.bind(this)
        this.state = {
            figureNumber: '',
            figureParts: '',
            selectionFrame: '',
            orderNumber: '',
            figureDescription: '',
            figureInstructions: '',
            figureEquipment: '',
            figureModel: '',
            photographer: '',
            shootLocation: '',
            shootDate: '',
            shootTime: '',
            photoDecorative: '',
            photoDemonstrative: '',
            orientationPortrait: '',
            orientationLandscape: '',
            token: '',
            getProjects: props.getProjects
        }
    }

    addPhoto(figureNumber, figureParts, selectionFrame, orderNumber, figureDescription, figureInstructions, figureEquipment, figureModel, photographer, shootLocation, shootDate, shootTime, photoDecorative, photoDemonstrative, orientationPortrait, orientationLandscape) {
        console.log(this.props.params.projectId)

        //Post to /api/projects
        if (
            this.state.figureNumber !== '' &&
            this.state.figureParts !== '' &&
            this.state.selectionFrame !== '' &&
            this.state.orderNumber !== '' &&
            this.state.figureDescription !== '' &&
            this.state.figureInstructions !== '' &&
            this.state.figureEquipment !== '' &&
            this.state.figureModel !== '' &&
            this.state.photographer !== '' &&
            this.state.shootLocation !== '' &&
            this.state.shootDate !== '' &&
            this.state.shootTime !== '' &&
            this.state.photoDecorative !== '' &&
            this.state.photoDemonstrative !== '' &&
            this.state.orientationPortrait !== '' &&
            this.state.orientationLandscape !== ''
        ) {
            var token = sessionStorage.getItem('token');
            fetch('/api/projects', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
// need to get the backend stuff from QQKalea. Example: title: this.state.title
                    needtoget: this.state.figureNumber,
                    needtoget: this.state.figureParts,
                    needtoget: this.state.selectionFrame,
                    needtoget: this.state.orderNumber,
                    needtoget: this.state.figureDescription,
                    needtoget: this.state.figureInstructions,
                    needtoget: this.state.figureEquipment,
                    needtoget: this.state.figureModel,
                    needtoget: this.state.photographer,
                    needtoget: this.state.shootLocation,
                    needtoget: this.state.shootDate,
                    needtoget: this.state.shootTime,
                    needtoget: this.state.photoDecorative,
                    needtoget: this.state.photoDemonstrative,
                    needtoget: this.state.orientationPortrait,
                    needtoget: this.state.orientationLandscape,
                    token: token,
                })
            })
                .then(response => response.json())
                .then(response => {
                    //  clear the form fields
                    this.setState({
                        figureNumber: '',
                        figureParts: '',
                        selectionFrame: '',
                        orderNumber: '',
                        figureDescription: '',
                        figureInstructions: '',
                        figureEquipment: '',
                        figureModel: '',
                        photographer: '',
                        shootLocation: '',
                        shootDate: '',
                        shootTime: '',
                        photoDecorative: '',
                        photoDemonstrative: '',
                        orientationPortrait: '',
                        orientationLandscape: '',
                    })

                    browserHistory.push('/projects')
                })
        }
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
                                    <label for="figureNumber">Figure Number</label>
                                    <input type="text" className="form-control figureNumber" placeholder="Figure 1.1"/>
                                </div>

                                <div className="form-group">
                                    <label for="figureParts">How many parts in this figure, total, including this one?</label>
                                    <input type="text" className="form-control figureParts" placeholder="1"/>
                                </div>

                            </div>

                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="figureSelection">Selection Frame Number</label>
                                    <input type="text" className="form-control figureSelection" placeholder="DSC05697"/>
                                </div>

                                <div className="form-group">
                                    <label for="figureOrder">Order Number (within the shoot)</label>
                                    <input type="text" className="form-control figureSelection" placeholder="1"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-body">
                        <form>              
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="figureDescription">Figure Description</label>
                                        <textarea type="text" className="form-control figureDescription"  placeholder="child swinging baseball bat"></textarea>
                                    </div>
                                </div> 
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="figureInstructions">Instructions for how to pose the model(s).</label>
                                        <textarea type="text" className="form-control figureInstructions"  placeholder="Stand with feet hip-width apart, facing home base, body angled towards the pitchers mound . . ."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="figureEquipment">Equipment</label>
                                        <textarea type="text" className="form-control figureEquipment"  placeholder="baseball bat, batting helmet, batting gloves . . ."></textarea>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="figureModel">Model Information</label>
                                        <textarea type="text" className="form-control figureModel"  placeholder="boy, 10 years old"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="figureModel">Photographer</label>
                                        <input type="text" className="form-control figurePhotographer" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="figureLocation">Location of Shoot</label>
                                        <textarea type="text" className="form-control figureLocation" placeholder="Champaign, IL, Kirby Park baseball field, batting box"></textarea>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="figureDate">Date of Shoot for This Image</label>
                                        <input type="text" className="form-control figureDate" placeholder="March 15"/>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="figureTime">Time of Shoot for This Image</label>
                                        <input type="text" className="form-control figureTime" placeholder="1-5 PM"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="checkbox figureDeco">
                                        <label>
                                            <input type="checkbox"/> Decorative photo?
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="checkbox figureDemo">
                                        <label>
                                            <input type="checkbox"/> Demonstrative photo?
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="checkbox figurePortrait">
                                        <label>
                                            <input type="checkbox"/> Portrait orientation?
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="checkbox figureLandscape">
                                        <label>
                                            <input type="checkbox"/> Landscape orientation?
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="figureSample">Upload Sample</label>
                                        <p className="help-block">You can upload sample images to guide the models and photographer.</p>
                                        <input type="file" className="figureSample"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-danger deleteFigure">Delete Figure</button>
                            </div>

                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-success pull-right saveFigure">Save Figure</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavAdditionalPager />
            <FooterArea />
        </div>
    );
  }
}

export default ProjectCreateCard;