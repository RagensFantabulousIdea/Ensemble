import React, { Component } from 'react';
import NavBar from './NavBar';
import NavAdditionalPager from './NavAdditionalPager';
import FooterArea from './FooterArea';
import ProjectShootFullCard from './ProjectShootFullCard';
import ProjectPhotoCollaboratingPhotoCard from './ProjectPhotoCollaboratingPhotoCard';
import CommentsBox from './CommentsBox';

class ProjectPhotoCollaborating extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.
    return (
        <div className="projectPhotoCollaborating">
            <NavBar />
            <NavAdditionalPager />

            <h1>Photo Collaborating</h1>
        
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h3>Photo Details and Messages</h3>
                            <ProjectShootFullCard />

                            <div className="panel panel-default">
                                <div className="panel-body messageArea">
                                    <CommentsBox />
                                </div>
                            </div>
                    </div>

                    <div className="col-sm-5">
                        <h3>Photo Shoot Uploads</h3>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="figureSamples" for="figureSample">Upload Images for This Figure</label>
                                        <label className="photoFrameInstructions" for="photoFrame">Enter the Frame Number for Each Photo Uploaded</label>
                                        <input type="text" className="form-control photoFrame" />
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
            <FooterArea />
        </div>
    );
  }
}

export default ProjectPhotoCollaborating;