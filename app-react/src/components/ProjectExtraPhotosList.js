import React, { Component } from 'react';
import ProjectExtraPhotosCard from './ProjectExtraPhotosCard';
import CommentsTitleBox from './CommentsTitleBox';
import CommentsTopLevel from './CommentsTopLevel';
import CommentsNested from './CommentsNested';
import CommentsDeeplyNested from './CommentsDeeplyNested';

class ProjectExtraPhotosList extends Component {
  render() {

//can users assign a photo from this list to an existing figure or start a new figure from a photo, and have it move from the Extras page to that existing or new figure?

    return (
        <div>

            <h1>Extra Photos</h1>

            <p>Sometimes photo shoots produce opportunties for extra photos. It's nice to be able to see the good ones. Sometimes, an extra photo might find a home in an existing or new figure within the project. You can chat about that here and assign photos to an existing or new figure. </p>
        
            <div className="container">
                <div className="row">

                    <div className="col-xs-7">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="figureSample">Upload Extra Images</label>
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

                    <div className="col-xs-5">
                        <div className="row">
                            <div className="panel panel-default">
                                <div className="panel-body messageArea">
                                    <CommentsTitleBox />
                                    <CommentsTopLevel />
                                    <CommentsNested />
                                    <CommentsDeeplyNested />
                                    <CommentsNested />
                                    <CommentsTopLevel />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default ProjectExtraPhotosList;