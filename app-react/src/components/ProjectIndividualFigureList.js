import React, { Component } from 'react';
import ProjectShootFullCard from './ProjectShootFullCard';

class ProjectIndividualFigureList extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.
    return (
        <div className="container">
            <div className="row">
                <div classname="col-xs-7">
                    <h2>Photo Details and Messages</h2>
                    <ProjectShootFullCard />
                </div>

                <div classname="col-xs-5">
                    <h2>Photo Shoot Uploads</h2>
                    <img className="shootUpload" src="./img/baseballhitter.jpg" alt="shoot upload" />
                </div>
            </div>
        </div>
    );
  }
}

export default ProjectIndividualFigureList;