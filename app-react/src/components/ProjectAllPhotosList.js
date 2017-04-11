import React, { Component } from 'react';
import NavBar from './NavBar';
import FooterArea from './FooterArea';
import ProjectAllPhotosListPhotoCard from './ProjectAllPhotosListPhotoCard';

class ProjectAllPhotosList extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.
    return (
        <div className="projectAllPhotosList">
            <NavBar />
            <h1>All Project Photos</h1>
        
            <div className="container">
                <div className="row">
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                    <ProjectAllPhotosListPhotoCard />
                </div>
            </div>
            <FooterArea />
        </div>
    );
  }
}

export default ProjectAllPhotosList;