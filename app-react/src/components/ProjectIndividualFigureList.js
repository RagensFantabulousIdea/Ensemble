import React, { Component } from 'react';
import ProjectShootMiniCard from './ProjectShootMiniCard';

class ProjectShootMiniCard extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.
    return (
        <div className="container">
            <div className="row">
                <div classname="col-xs-7">
                    <ProjectShootFullCard />
                </div>
            </div>
        </div>
    );
  }
}

export default ProjectShootMiniCard;