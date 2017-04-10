import React, { Component } from 'react';
import ProjectShootFullCard from './ProjectShootFullCard';
import ProjectPhotoCollaboratingPhotoCard from './ProjectPhotoCollaboratingPhotoCard';

class ProjectPhotoCollaborating extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.
    return (
        <div>
            <nav aria-label="...">
                <ul className="pager">
                    <li className="previous"><a href="#"><span aria-hidden="true">&larr;</span> Last Figure</a></li>
                    <li className="backToProjectList"><a href="#">Return to Main Project List</a></li>
                    <li className="next"><a href="#">Next Figure <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
            </nav>

            <h1>Photo Collaborating</h1>
        
            <div className="container">
                <div className="row">
                    <div className="col-xs-7">
                        <h2>Photo Details and Messages</h2>
                            <ProjectShootFullCard />
                    </div>

                    <div className="col-xs-5">
                        <h2>Photo Shoot Uploads</h2>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="figureSample">Upload Images for This Figure</label>
                                        <input type="file" className="figureResults"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />  
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                                <ProjectPhotoCollaboratingPhotoCard />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ProjectPhotoCollaborating;