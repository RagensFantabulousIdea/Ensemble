import React, { Component } from 'react';
import NavBar from './NavBar';
import FooterArea from './FooterArea';
import ProjectExtraPhotosCard from './ProjectExtraPhotosCard';
import CommentsBox from './CommentsBox';

class ProjectExtraPhotosList extends Component {
  render() {

//can users assign a photo from this list to an existing figure or start a new figure from a photo, and have it move from the Extras page to that existing or new figure?

    return (
        <div className="projectExtraPhotosList">
            <NavBar />
            <h1>Extra Photos</h1>
        
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <p className="instructions">Sometimes photo shoots produce opportunties for extra photos and it's nice to be able to see the good ones. Sometimes, an extra photo might find a home in an existing or new figure within the project. You can chat about that here and assign photos to an existing or new figure. </p> <br/> <br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-5">
                        <div className="row">
                            <div className="panel panel-default">
                                <div className="panel-body messageArea">
                                    <CommentsBox />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-7">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="figureOptions" for="figureSample">Upload Images</label><br/>
                                        <label className="photoFrameInstructions" for="photoFrame">Enter the Frame Number for Each Photo Uploaded</label>
                                        <input type="text" className="form-control photoFrame" /><br/>
                                        <input type="file" className="figureResults"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                                <ProjectExtraPhotosCard />
                            </div>
                    </div>

                    

                </div>
            </div>
            <FooterArea />
        </div>
    );
  }
}

export default ProjectExtraPhotosList;