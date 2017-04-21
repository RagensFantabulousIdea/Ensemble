import React, { Component } from 'react';
import NavBar from './NavBar';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';

// QQManpreet: NOTE: we may not be able to do the "next" and "previous" pager that is set up in te NavAdditionalPager component that I call for here, because that takes a bunch of backend magic to work, and we might not have time. So we might have to take that out.

class ProjectAssetEditCard extends Component {
    constructor(props) {
        super(props)
        this.editAsset = this.editAsset.bind(this)
        this.getAssets = this.getAssets.bind(this)

        this.state = {

            figure_num: '',
            selected_photo: '',
            parts: '',
            frame_num: '',
            order_num: '',
            asset_description: '',
            instructions: '',
            equipment: '',
            photo_model: '',
            photographer: '',
            location_of_shoot: '',
            date_of_shoot: '',
            time_of_shoot: '',
            decorative: '0',
            demonstrative: '0',
            portrait: '0',
            landscape: '0',
            token: '',
            complete: false,
            asset: null
        }
    }
    componentWillMount() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'))
            .then(response => response.json())
            .then(asset => this.setState({
                asset: asset,
                figure_num: asset.figure_num || "",
                selected_photo: asset.selected_photo ? asset.selected_photo.frame_num : '',
                parts: asset.parts || "",
                frame_num: asset.frame_num || "",
                order_num: asset.order_num || "",
                asset_description: asset.asset_description || "",
                instructions: asset.instructions || "",
                equipment: asset.equipment || "",
                photo_model: asset.photo_model || "",
                photographer: asset.photographer || "",
                location_of_shoot: asset.location_of_shoot || "",
                date_of_shoot: asset.date_of_shoot || "",
                time_of_shoot: asset.time_of_shoot || "",
                decorative: asset.decorative || false,
                demonstrative: asset.demonstrative || false,
                portrait: asset.portrait || false,
                landscape: asset.landscape || false,
                // {checkbox.complete === 'yes' ? 'checked' : ''}
            }))
    }

    editAsset(figure_num, selected_photo, parts, frame_num, order_num, asset_description, instructions, equipment, photo_model, photographer, location_of_shoot, date_of_shoot, time_of_shoot, decorative, demonstrative, portrait, landscape) {

        var token = sessionStorage.getItem('token');
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                figure_num: this.state.figure_num,
                selected_photo: this.state.selected_photo,
                parts: this.state.parts,
                frame_num: this.state.frame_num,
                order_num: this.state.order_num,
                asset_description: this.state.asset_description,
                instructions: this.state.instructions,
                equipment: this.state.equipment,
                photo_model: this.state.photo_model,
                photographer: this.state.photographer,
                location_of_shoot: this.state.location_of_shoot,
                date_of_shoot: this.state.date_of_shoot,
                time_of_shoot: this.state.time_of_shoot,
                decorative: this.state.decorative,
                demonstrative: this.state.demonstrative,
                portrait: this.state.portrait,
                landscape: this.state.landscape,
                // {checkbox.complete === 'yes' ? 'checked' : ''}
                token: token
            })
        })

            .then(response => response.json())
            .then(response => {
                // browserHistory.push('/shoot/' + this.props.projectId + '/assets/' + this.props.id + '/collaborate')
                browserHistory.push('/shoot/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/collaborate')
            })
    }
    getAssets() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets?token=' + sessionStorage.getItem('token'))
            .then(response => response.json())
            .then(assets => {
                this.setState({ assets: assets })
            })
        browserHistory.push('/shoot/' + this.props.params.projectId)
    }

    deleteAsset(id) {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'), { method: 'DELETE' })
            .then(response => {
                this.getAssets()
            })

    }


    render() {

        return (
            <div className="projectCreateCard">
                <NavBar />

                <h1>Photo Shoot Planning Card</h1>

                <div className="container">
                    <div className="panel">

                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-xs-6">
                                    <button type="button" className="btn btn-danger deleteFigure" onClick={() => this.deleteAsset(this.props.id)}>Delete Asset Card</button>
                                </div>

                                <div className="col-xs-6">
                                    <button type="button" className="btn btn-success pull-right saveFigure" onClick={this.editAsset}>Save Asset Card</button>
                                </div>
                            </div>
                        </div>

                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <label htmlFor="figureNumber">Asset Number</label>
                                        <input type="text" className="form-control figureNumber" value={this.state.figure_num} onChange={(e) => this.setState({ figure_num: e.target.value })} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="figureParts">If this asset is part of a multi-part figure, how many parts are in the figure including the one for this asset?</label>
                                        <input type="text" className="form-control figureParts" value={this.state.parts} onChange={(e) => this.setState({ parts: e.target.value })} />
                                    </div>

                                </div>

                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <label htmlFor="figureSelection">Asset Selection Frame Number</label>
                                        <input type="text" className="form-control figureSelection" value={this.state.selected_photo} onChange={(e) => this.setState({ selected_photo: e.target.value })} />
                                    </div>

                                    <div className="form-group">
                                    <br/>
                                        <label htmlFor="figureOrder">Order Number (within the photo shoot)</label>
                                        <input type="text" className="form-control figureOrder" value={this.state.order_num} onChange={(e) => this.setState({ order_num: e.target.value })} />
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
                                            <textarea type="text" className="form-control figureDescription" value={this.state.asset_description} onChange={(e) => this.setState({ asset_description: e.target.value })}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label htmlFor="figureInstructions">Instructions (for posing the models)</label>
                                            <textarea type="text" className="form-control figureInstructions" value={this.state.instructions} onChange={(e) => this.setState({ instructions: e.target.value })}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="figureEquipment">Equipment</label>
                                            <textarea type="text" className="form-control figureEquipment" value={this.state.equipment} onChange={(e) => this.setState({ equipment: e.target.value })}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="photo_model">Model Information</label>
                                            <textarea type="text" className="form-control figureModel" value={this.state.photo_model} onChange={(e) => this.setState({ photo_model: e.target.value })}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="figurePhotographer">Photographer</label>
                                            <input type="text" className="form-control figurePhotographer" value={this.state.photographer} onChange={(e) => this.setState({ photographer: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="figureLocation">Location of Shoot</label>
                                            <textarea type="text" className="form-control figureLocation" value={this.state.location_of_shoot} onChange={(e) => this.setState({ location_of_shoot: e.target.value })}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="figureDate">Date of Shoot</label>
                                            <input type="text" className="form-control figureDate" value={this.state.date_of_shoot} onChange={(e) => this.setState({ date_of_shoot: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="figureTime">Time of Shoot</label>
                                            <input type="text" className="form-control figureTime" value={this.state.time_of_shoot} onChange={(e) => this.setState({ time_of_shoot: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="checkbox figureDeco">
                                            <label>
                                                <input type="checkbox" checked={this.state.decorative} onChange={(e) => this.setState({ decorative: e.target.checked })} /> Decorative photo?
                                        </label>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="checkbox figureDemo">
                                            <label>
                                                <input type="checkbox" checked={this.state.demonstrative} onChange={(e) => this.setState({ demonstrative: e.target.checked })} /> Demonstrative photo?
                                        </label>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="checkbox figurePortrait">
                                            <label>
                                                <input type="checkbox" checked={this.state.portrait} onChange={(e) => this.setState({ portrait: e.target.checked })} /> Portrait orientation?
                                        </label>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="checkbox figureLandscape">
                                            <label>
                                                <input type="checkbox" checked={this.state.landscape} onChange={(e) => this.setState({ landscape: e.target.checked })} /> Landscape orientation?
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="panel-footer">
                        </div>
                    </div>
                </div>
                <FooterArea />
            </div>
        );
    }
}

export default ProjectAssetEditCard;


// {todo.completed === 'yes' ? 'checked' : ''}