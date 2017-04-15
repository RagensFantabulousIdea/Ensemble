import React, { Component } from 'react';
import NavBar from './NavBar';
import NavAdditionalPager from './NavAdditionalPager';
import FooterArea from './FooterArea';
import ProjectShootFullCard from './ProjectShootFullCard';
import ProjectPhotoCollaboratingPhotoCard from './ProjectPhotoCollaboratingPhotoCard';
import CommentsBox from './CommentsBox';
import PhotoUploader from './PhotoUploader';

class ProjectPhotoCollaborating extends Component {

     constructor(props){
        super(props)
            this.getAsset = this.getAsset.bind(this)
            // this.getPhotos = this.getPhotos.bind(this)
   
        this.state = { // state of the page
            //something for photos??
        }
      }

    //LifeCycles Methods
    componentWillMount() {
        this.getAsset()
        //   this.getPhotos()
    }

    getAsset() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => this.setState({...response}))
    }

//post for photos??
    //     getPhotos(){
    //     fetch('/api/projects/' + this.props.params.projectId + this.props.params.assetId + '/photos?token=' + sessionStorage.getItem('token'))
    //         .then(response => response.json())
    //         .then(response => {
    //             this.setState({photos: response})
    //         })
    // }
  
  render() {
    //   console.log(this.state.assets)
    //   let assets = this.state.assets.map((asset, key) => <ProjectShootFullCard key={Date.now() + key} index={key} {...asset} getAssets={this.getAssets} projectId={this.props.params.projectId}/>)

    //   let photos = this.state.photos.map((photo, key) => <ProjectPhotoCollaboratingPhotoCard key={Date.now() + key} index={key} {...photos} getPhotos={this.getPhotos} projectId={this.props.params.projectId}/>)

    return (
        <div className="projectPhotoCollaborating">
            <NavBar {...this.props} />
            <NavAdditionalPager  {...this.props} />

            <h1>Photo Collaborating</h1>
        
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h3>Photo Details and Messages</h3>
                            <ProjectShootFullCard {...this.props} {...this.state} />

                            <div className="panel panel-default">
                                <div className="panel-body messageArea">
                                    <CommentsBox />
                                </div>
                            </div>
                    </div>

                    <div className="col-sm-5">
                        <h3>Photo Shoot Uploads</h3>
                        <div className="row">
                            <PhotoUploader {...this.props} />
                        </div>

                        <div className="row">
                            {/* {photos} */}
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

// <div className="form-group">
//     <label className="figureOptions" htmlFor="figureSample">Upload Images for This Figure</label>
//     <label className="photoFrameInstructions" htmlFor="photoFrame">Enter the Frame Number for Each Photo Uploaded</label>
//     <input type="text" className="form-control photoFrame" onChange={(e) => this.setState({NEEDNAMEHERE: e.target.value})}/> <br/>
//     <input type="file" className="figureResults"/>
// </div>