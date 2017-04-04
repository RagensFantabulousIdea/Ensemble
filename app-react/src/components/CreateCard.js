import React, { Component } from 'react';

class ProjectShoot extends Component {
  render() {

    // $('#myModal').on('shown.bs.modal', function () {
    // $('#myInput').focus()
// })
 // ideally, want this to be a modal, like this stuff from Bootstrap, but it doesn't just work, so have to figure that out.
    return (
        <div>
            <div className="panel panel-default container">
                <div className="panel-heading">
                    <h3 className="panel-title">Image Planning Card</h3>
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

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureFrame">Camera Frame</label>
                                <input type="text" className="form-control figureFrame" placeholder="DSC05697"/>
                                <p className="help-block">During the shoot, note the selection frame number or range of frame numbers if not selected.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="form-group">
                            <label for="figureDescription">Figure Description</label>
                            <textarea type="text" className="form-control figureDescription"  placeholder="man doing a squat exercise"> </textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label for="figureInstructions">Instructions for how to create the image.</label>
                            <textarea type="text" className="form-control figureInstructions"  placeholder="1. Stand with feet hip-width apart, facing home base, body angled towards the pitchers mound . . ."> </textarea>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="form-group">
                            <label for="figureSample">Upload Sample</label>
                            <input type="file" className="figureSample"/>
                            <p className="help-block">You can upload sample images to guide the models and photographer.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureEquipment">Equipment</label>
                                <textarea type="text" className="form-control figureEquipment"  placeholder="* baseball bat"> </textarea>
                                <p className="help-block">You can make this show as a bulleted list within the project page by adding an * with a space after it at the start of each line within the text box.</p>
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureModel">Model Information</label>
                                <textarea type="text" className="form-control figureModel"  placeholder="* boy, 10 years old"> </textarea>
                                <p className="help-block">You can make this show as a bulleted list within the project page by adding an * with a space after it at the start of each line within the text box.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label for="figureLocation">Location of Shoot</label>
                                <input type="text" className="form-control figureLocation" placeholder="baseball field, batting box"/>
                                <p className="help-block">Note the general location as well as specific spot within that location. For example, "gymnasium, center of floor."</p>
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
                            <div className="checkbox figureFacts">
                                <label>
                                    <input type="checkbox"/> Decorative image?
                                </label>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="checkbox figureFacts">
                                <label>
                                    <input type="checkbox"/> Demonstrative image?
                                </label>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="checkbox figureFacts">
                                <label>
                                    <input type="checkbox"/> Portrait orientation?
                                </label>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="checkbox figureFacts">
                                <label>
                                    <input type="checkbox"/> Landscape orientation?
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <div className="checkbox figureFacts pull-right">
                                    <label>
                                        <input type="checkbox"/> Figure has multiple parts?
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label for="figureParts">If so, how many parts in this figure, total, including this one?</label>
                                <input type="text" className="form-control figureParts" placeholder="2"/>
                            </div>
                        </div>
                                
                    </div>

                    <div className="row pull-right">
                        <button type="submit" className="btn btn-success">Save Item</button>
                    </div>


                

                    

                    
                </form>
            </div>
        </div>
    </div>

    );
  }
}

export default ProjectShoot;