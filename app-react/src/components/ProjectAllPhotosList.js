import React, { Component } from 'react';
import ProjectAllPhotosListPhotoCard from './ProjectAllPhotosListPhotoCard';

class ProjectAllPhotosList extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// need to figure out how to pull approved image to use as the heading background.
    return (
        <div>

            <h1>All Project Photos</h1>

            <p className="instructions">See all of the photos uploaded to all of the figures and on the Extra Photos page.</p>
        
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
        </div>
    );
  }
}

export default ProjectAllPhotosList;