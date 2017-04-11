import React, { Component } from 'react';

class ProjectShootMiniCard extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.

//only show the commentIndicator span if there are new messages on that figure.
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">

            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true"></span> <br/>
                    <div className="row">
                        <div className="col-xs-6">
                            <h3 className="panel-title">Figure 3.6</h3>
                        </div>

                        <div className="col-xs-6">
                            <h3 className="panel-title pull-right">Order: 1</h3>
                        </div>
                    </div>
                </div>
            
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-12">
                            <p><span>Boy swinging a baseball bat, wearing batting helmet and gloves.</span></p>
                        </div>
                    </div>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-6">
                            <p>May 1, 2017</p>
                        </div>

                        <div className="col-xs-6">
                            <p className="pull-right">2-5 PM</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default ProjectShootMiniCard;