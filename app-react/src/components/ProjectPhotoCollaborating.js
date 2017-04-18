import React, { Component } from 'react';
import NavBar from './NavBar';
import NavAdditionalPager from './NavAdditionalPager';
import FooterArea from './FooterArea';
import ProjectShootFullCard from './ProjectShootFullCard';
import PhotoUploader from './PhotoUploader';
import ProjectPhotoCollaboratingPhotoCard from './ProjectPhotoCollaboratingPhotoCard';
import CommentsBox from './CommentsBox';

class ProjectPhotoCollaborating extends Component {

     constructor(props){
        super(props)
            this.getAssetFullCard = this.getAssetFullCard.bind(this)
            this.getImages = this.getImages.bind(this)
   
        this.state = { // state of the page
            frame_num: '',
            token: '',
            images: []
        }
      }

    //LifeCycles Methods
    componentWillMount(){ 
        console.log(this.props)
        this.getAssetFullCard()
        // this.getImages()
    }

    componentDidMount(){
        this.getImages()
    }

    getAssetFullCard(){
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => this.setState({...response}))
    }

    getImages(){
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'))
        // console.log(token)
        .then(response => response.json())
        .then(response => {
            // this.setState({images: images})
            this.setState({images: response.photos})
        })
    }
  
  render(){
      console.log(this.state.images)
      let images = this.state.images.map((photo, key) => <ProjectPhotoCollaboratingPhotoCard key={Date.now() + key} index={key}  image={photo.image} projectId={this.props.params.projectId} assetId={this.props.params.assetId} frame_num={photo.frame_num} />)

    return (
        <div className="projectPhotoCollaborating">
            <NavBar {...this.props} />
            <NavAdditionalPager  {...this.props} />

            <h1>Asset Collaborating</h1>
        
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h3>Asset Details and Messages</h3>
                            <ProjectShootFullCard {...this.props} {...this.state} />

                            <div className="panel panel-default">
                                <div className="panel-body messageArea">
                                    <CommentsBox projectId={this.props.params.projectId} assets={this.props.params.assetId}/>
                                </div>
                            </div>
                    </div>

                    <div className="col-sm-5">
                        <h3>Photo Shoot Uploads</h3>
                        <div className="row">
                            <PhotoUploader getImages={this.getImages} {...this.props} />
                        </div>

                        <div className="row">
                            {images}
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