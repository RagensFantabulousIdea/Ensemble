import React, { Component } from 'react';

class ProjectShoot extends Component {
  render() {

 // ideally, want this to be a modal, like this stuff from Bootstrap, but it doesn't just work, so have to figure that out.

 //users fill out figure information here, it goes to ProjectShootCard. Then ProjectShootCards gets placed in a list on ProjectShoot.
    return (
        <div>
            <div className="panel panel-default container">
                <div className="panel-heading">
                    <h3 className="panel-title">Figure Planning Card</h3>
                </div>
            <div className="panel-body">
                <form>
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureNumber">Figure Number</label>
                                <input type="text" className="form-control figureNumber" placeholder="Figure 1.1"/>
                            </div>
                        </div>
                    </div>
                    
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
                                <textarea type="text" className="form-control figureInstructions"  placeholder="1. Stand with feet hip-width apart, facing home base, body angled towards the pitchers mound . . ."></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureEquipment">Equipment</label>
                                <p className="help-block">You can make this show as a bulleted list within the project page by adding an asterisk with a space after it ("* ") at the start of each line within the text box.</p>
                                <textarea type="text" className="form-control figureEquipment"  placeholder="* baseball bat"></textarea>
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureModel">Model Information</label>
                                <p className="help-block">You can make this show as a bulleted list within the project page by adding an asterisk with a space after it ("* ") at the start of each line within the text box.</p>
                                <textarea type="text" className="form-control figureModel"  placeholder="* boy, 10 years old"></textarea>
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
                                    <input type="checkbox"/> Decorative image?
                                </label>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="checkbox figureDemo">
                                <label>
                                    <input type="checkbox"/> Demonstrative image?
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

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="checkbox figureParts">
                                <label>
                                    <input type="checkbox"/> Figure has multiple parts? If checked, how many parts in this figure, total, including this one? <input type="text" className="form-control figureParts" placeholder="2"/>
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
                       
                    <div className="row pull-right">
                        <button type="submit" className="btn btn-success">Save Figure</button>
                    </div>

                </form>
            </div>
        </div>
    </div>

    );
  }
}

export default ProjectShoot;