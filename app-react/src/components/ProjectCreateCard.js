import React, { Component } from 'react';
import NavBar from './NavBar';
import NavAdditionalPager from './NavAdditionalPager';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

//Need to add quotes around user input for photo selected box?

// where it says "addPhoto", it used to say "addProject".
//where it says "deletePhoto", it used to say "deleteProject".
//where it says "getDecorative", "getDemonstrative", "getOrientationPortrait", or "getOrientationLandscape" it used to say "getProjects"

class ProjectCreateCard extends Component {
    constructor(props) {
        super(props)
        // this.togglePhotoDecorative = this.togglePhotoDecorative.bind(this)
        // this.togglePhotoDemonstrative = this.togglePhotoDemonstrative.bind(this)
        // this.toggleOrientationPortrait = this.toggleOrientationPortrait.bind(this)
        // this.toggleOrientationLandscape = this.toggleOrientationLandscape.bind(this)
        // this.getDecorative = this.getDecorative.bind(this)
        // this.getDemonstrative = this.getDemonstrative.bind(this)
        // this.getOrientationPortrait = this.getOrientationPortrait.bind(this)
        // this.getOrientationLandscape = this.getOrientationLandscape.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        // this.deletePhoto = this.deletePhoto.bind(this)
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
            asset: '', //not sure this should be here
            token: ''
            // getDecorative: props.getDecorative,
            // getDemonstrative: props.getDemonstrative,
            // getOrientationPortrait: props.getOrientationPortrait,
            // getOrientationLandscape: props.getOrientationLandscape,
            // complete: props.complete
        }
    }

    // togglePhotoDecorative() {
    //     if (this.state.complete === false) {
    //         var token = sessionStorage.getItem('token');

    //         // tell back-end that it's decorative
    //         fetch('/api/projects/' + this.props.id + '?token=' + token, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },

    //             body: JSON.stringify({
    //                 decorative: true
    //             })
    //         })
    //         .then(response => {
    //             this.props.getDecorative()
    //         })
    //     }
    //     else {
    //         var token = sessionStorage.getItem('token');

    //         // tell back-end that it's decorative
    //         fetch('/api/projects/' + this.props.id + '?token=' + token, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },

    //             body: JSON.stringify({
    //                 decorative: false
    //             })
    //         })
    //         .then(response => {
    //             this.props.getDecorative()
    //         })
    //     }
    // }

//QQCOllIN: how to do this? want to save the info to the backend and then show or hide words in the card if it's checked or not.
        //API Methods
    // getDecorative(){
    //     fetch('/api/projects/:id/assets' + this.props.params.projectId + '?token=' + sessionStorage.getItem('token'))
    //         .then(response => response.json())
    //         .then(projects => {
    //             this.setState({decorative: photoDecorative})
    //         })
    // }
    
                    // demonstrative: this.state.photoDemonstrative,
                    // portrait: this.state.orientationPortrait,
                    // landscape: this.state.orientationLandscape,

// togglePhotoDemonstrative() {
//         if (this.state.complete === false) {
//             var token = sessionStorage.getItem('token');

//             // tell back-end that it's demonstrative.
//             fetch('/api/projects/' + this.props.id + '?token=' + token, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },

//                 body: JSON.stringify({
//                     demonstrative: true
//                 })
//             })
//             .then(response => {
//                 this.props.getDemonstrative()
//             })
//         }
//         else {
//             var token = sessionStorage.getItem('token');

            // tell back-end that it's demonstrative.
//             fetch('/api/projects/' + this.props.id + '?token=' + token, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },

//                 body: JSON.stringify({
//                     demonstrative: false
//                 })
//             })
//             .then(response => {
//                 this.props.getDemonstrative()
//             })
//         }
//     }
// toggleOrientationPortrait() {
        // if (this.state.complete === false) {
        //     var token = sessionStorage.getItem('token');

            // tell back-end that it's portrait.
//             fetch('/api/projects/' + this.props.id + '?token=' + token, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },

//                 body: JSON.stringify({
//                     portrait: true
//                 })
//             })
//             .then(response => {
//                 this.props.getOrientationPortrait()
//             })
//         }
//         else {
//             var token = sessionStorage.getItem('token');

//             // tell back-end that it's portrait.
//             fetch('/api/projects/' + this.props.id + '?token=' + token, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },

//                 body: JSON.stringify({
//                     portrait: false
//                 })
//             })
//             .then(response => {
//                 this.props.getOrientationPortrait()
//             })
//         }
//     }
// toggleOrientationLandscape() {
//         if (this.state.complete === false) {
//             var token = sessionStorage.getItem('token');

            // tell back-end that it's landscape.
    //         fetch('/api/projects/' + this.props.id + '?token=' + token, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },

    //             body: JSON.stringify({
    //                 landscape: true
    //             })
    //         })
    //         .then(response => {
    //             this.props.getOrientationLandscape()
    //         })
    //     }
    //     else {
    //         var token = sessionStorage.getItem('token');

    //         // tell back-end that it's landscape.
    //         fetch('/api/projects/' + this.props.id + '?token=' + token, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },

    //             body: JSON.stringify({
    //                 landscape: false
    //             })
    //         })
    //         .then(response => {
    //             this.props.getOrientationLandscape()
    //         })
    //     }
    // }

    addPhoto(figureNumber, figureParts, selectionFrame, orderNumber, figureDescription, figureInstructions, figureEquipment, figureModel, photographer, shootLocation, shootDate, shootTime, photoDecorative, photoDemonstrative, orientationPortrait, orientationLandscape) {

        //Post to /api/projects
        var token = sessionStorage.getItem('token');
        fetch('/api/projects/' + this.props.params.projectId + '/assets?token=' + sessionStorage.getItem('token'), {
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
                model: this.state.figureModel,
                photographer: this.state.photographer,
                location_of_shoot: this.state.shootLocation,
                date_of_shoot: this.state.shootDate,
                time_of_shoot: this.state.shootTime,
                decorative: this.state.photoDecorative,
                demonstrative: this.state.photoDemonstrative,
                portrait: this.state.orientationPortrait,
                landscape: this.state.orientationLandscape,
                asset: this.state.asset, //not sure this is right. in todos, it was todo: this.state.description
                token: token
            })
        })
            .then(response => response.json())
            .then(asset => { //originally, this was .then(response => {})
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
                    orientationLandscape: ''
                })

                browserHistory.push('/shoot/' + this.props.params.projectId + '/createcard')
                // browserHistory.push('/shoot/' + this.props.params.projectId) 
                //works, but negates desired function of being able to navigate forwards and backwards through figures.
                // this.props.history.push('/shoot/' + this.props.params.projectId + '/createcard')
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
                                    <label htmlFor="figureNumber">Figure Number</label>
                                    <input type="text" className="form-control figureNumber" placeholder="Figure 1.1" onChange={(e) => this.setState({figureNumber: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="figureParts">How many parts in this figure, total, including this one?</label>
                                    <input type="text" className="form-control figureParts" placeholder="1" onChange={(e) => this.setState({figureParts: e.target.value})}/>
                                </div>

                            </div>

                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="figureSelection">Selection Frame Number</label>
                                    <input type="text" className="form-control figureSelection" placeholder="DSC05697" onChange={(e) => this.setState({selectionFrame: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="figureOrder">Order Number (within the shoot)</label>
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
                                        <label htmlFor="figureDescription">Figure Description</label>
                                        <textarea type="text" className="form-control figureDescription"  placeholder="child swinging baseball bat" onChange={(e) => this.setState({figureDescription: e.target.value})}></textarea>
                                    </div>
                                </div> 
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="figureInstructions">Instructions for how to pose the model(s).</label>
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
                                        <label htmlFor="figureModel">Model Information</label>
                                        <textarea type="text" className="form-control figureModel"  placeholder="boy, 10 years old" onChange={(e) => this.setState({figureModel: e.target.value})}></textarea>
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
                                        <label htmlFor="figureDate">Date of Shoot for This Image</label>
                                        <input type="text" className="form-control figureDate" placeholder="March 15" onChange={(e) => this.setState({shootDate: e.target.value})}/>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="figureTime">Time of Shoot for This Image</label>
                                        <input type="text" className="form-control figureTime" placeholder="1-5 PM" onChange={(e) => this.setState({shootTime: e.target.value})}/>
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
                                            <input type="checkbox" /> Demonstrative photo?
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="col-sm-3">
                                    <div className="checkbox figurePortrait">
                                        <label>
                                            <input type="checkbox" /> Portrait orientation?
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="checkbox figureLandscape">
                                        <label>
                                            <input type="checkbox" /> Landscape orientation?
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
                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-danger deleteFigure" onClick={() => this.deletePhoto(this.props.id)}>Delete Figure</button>
                            </div>

                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-success pull-right saveFigure" onClick={this.addPhoto}>Save Figure</button>
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