import React, { Component } from 'react';

class ProjectCreateCard extends Component {
  render() {

 // ideally, want this to be a modal, like this stuff from Bootstrap, but it doesn't just work, so have to figure that out.

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.
    return (
        <div>
            <nav aria-label="...">
                <ul className="pager">
                    <li className="previous"><a href="#"><span aria-hidden="true">&larr;</span> Last Figure</a></li>
                    <li className="backToProjectList"><a href="#">Return to Main Project List</a></li>
                    <li className="next"><a href="#">Next Figure <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
            </nav>

            <div className="panel panel-default container">
                <div className="panel-heading">
                <h1 className="panel-title">Photo Shoot Planning Card</h1>
                <br/>
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
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureEquipment">Equipment</label>
                                <textarea type="text" className="form-control figureEquipment"  placeholder="baseball bat, batting helmet, batting gloves . . ."></textarea>
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureModel">Model Information</label>
                                <textarea type="text" className="form-control figureModel"  placeholder="boy, 10 years old"></textarea>
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
                       
                    <div className="row">
                        <div className="col-xs-6">
                            <button type="submit" className="btn btn-danger">Delete Figure</button>
                        </div>

                        <div className="col-xs-6">
                            <button type="submit" className="btn btn-success pull-right">Save Figure</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

    );
  }
}

export default ProjectCreateCard;