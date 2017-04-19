import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NavAdditionalPager extends Component {
  render() {

    constructor(props) {
        super(props)
            this.upload = this.previousAsset.bind(this)
            this.upload = this.nextAsset.bind(this)
            this.state = {
                assetCollaborating: [], 
                token: ''
        }
    }

    previousAsset() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/previous?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => {window.location.reload();})
        // .then(response => {
            
            // browser.window.push({assetCollaborating: response})
        // })
    }

    nextAsset() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/next?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => {window.location.reload();})
        // .then(response => {
        //     // browser.window.push({assetCollaborating: response})
        // })
    }

    return (
let assetCollaborating = 

this.state.images.map((photo, key) => <ProjectPhotoCollaboratingPhotoCard key={Date.now() + key} index={key}  image={photo.image} projectId={this.props.params.projectId} assetId={this.props.params.assetId} photoId={photo.id} frame_num={photo.frame_num} />)
        
        <div>
            <nav className="navAdditional" aria-label="...">
                <ul className="pager">
                    <li className="previous"><a onClick={() => this.previousAsset()}><span aria-hidden="true">&larr;</span> Previous</a></li>
                    <li className="next"><a href="#">Next <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default NavAdditionalPager;
// <Link className="nav-item projectNav" onClick={() => browserHistory.push('/projects/complete')}>