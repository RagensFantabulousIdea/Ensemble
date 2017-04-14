import React, { Component } from 'react';
import NavBar from './NavBar';
import NavAdditionalPager from './NavAdditionalPager';
import FooterArea from './FooterArea';
import ProjectShootFullCard from './ProjectShootFullCard';
import ProjectPhotoCollaboratingPhotoCard from './ProjectPhotoCollaboratingPhotoCard';
import CommentsBox from './CommentsBox';

// import { browserHistory } from 'react-router';

// original list from projectcreatecard

    // figure_num: this.state.figureNumber,
  // parts: this.state.figureParts,
  // frame_num: this.state.selectionFrame,
  // order_num: this.state.orderNumber,
  // asset_description: this.state.figureDescription,
  // instructions: this.state.figureInstructions,
  // equipment: this.state.figureEquipment,
  // model: this.state.figureModel,
  // photographer: this.state.photographer,
  // location_of_shoot: this.state.shootLocation,
  // date_of_shoot: this.state.shootDate,
  // time_of_shoot: this.state.shootTime,
  // decorative: this.state.photoDecorative,
  // demonstrative: this.state.photoDemonstrative,
  // portrait: this.state.orientationPortrait,
  // landscape: this.state.orientationLandscape,
  // asset: this.state.asset, //not sure this is right. in todos, it was todo: this.state.description
  // token: token
  
  // new ones on project shoot full card
  // frame_range: frame_range,
  // frame_num: this.state.selectionFrame

  //new one on this page?
//   something to do with frame of uploaded photo?

  //plus photos . . .
  //plus ability to mark photos yes, no, trash
  //plus messages . . .

class ProjectPhotoCollaborating extends Component {

     constructor(props){
        super(props) // super is required here
            this.getAsset = this.getAsset.bind(this)
            // this.getPhotos = this.getPhotos.bind(this)
   
        this.state = { // state of the page
            // figureNumber: '',
            // figureParts: '',
            // selectionFrame: '',
            // orderNumber: '',
            // figureDescription: '',
            // figureInstructions: '',
            // figureEquipment: '',
            // figureModel: '',
            // photographer: '',
            // shootLocation: '',
            // shootDate: '',
            // shootTime: '',
            // photoDecorative: '',
            // photoDemonstrative: '',
            // orientationPortrait: '',
            // orientationLandscape: '',
            // frame_range: '',
            // token: '',
            // assets: [] //start with empty state
        }
      }

    //LifeCycles Methods
    // '/api/projects/' + this.props.params.projectId + '/assets?token=' + sessionStorage.getItem('token')
    componentWillMount() {
        this.getAsset()
        //   this.getPhotos()
    }

    getAsset() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => this.setState({...response}))
    }


// getAssets method is in ProjectShootList file?
//post? patch? might nto be fetch?
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
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label className="figureOptions" htmlFor="figureSample">Upload Images for This Figure</label>
                                        <label className="photoFrameInstructions" htmlFor="photoFrame">Enter the Frame Number for Each Photo Uploaded</label>
                                        <input type="text" className="form-control photoFrame" onChange={(e) => this.setState({NEEDNAMEHERE: e.target.value})}/> <br/>
                                        <input type="file" className="figureResults"/>
                                    </div>
                                </div>
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