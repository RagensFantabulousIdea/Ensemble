import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class SamplePhotoCard extends Component {

  constructor(props){
        super(props)
        this.deletePhoto = this.deletePhoto.bind(this)
    }

    deletePhoto() {
        fetch('/api/projects/' + this.props.projectId + '/assets/' + this.props.assetId + '/sample_photos/' + this.props.photoId + '?token='+ sessionStorage.getItem('token'), {method: 'DELETE'})
        .then(response => {window.location.reload();})
    }

render() {
      console.log(this.props.image)
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                <div className="panel">
                
                    <div className="panel-body imagePanel" onClick={() => browserHistory.push('/shoot/' + this.props.projectId + '/assets/' + this.props.assetId + '/photos/' + this.props.photoId + '?src=' + encodeURIComponent(this.props.image.std.url))}>
                        <img src={this.props.image.std.url} alt="uploaded" />
                    </div>

                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-10">
                                <Link className="couldSelect"><span className="glyphicon glyphicon-trash" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Delete sample image" onClick={() => this.deletePhoto()}></span></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default SamplePhotoCard;

// <div className="row">
//                             
                            
//                             <div className="col-xs-4">
//                                 <a className="doNotSelect"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Don't select"></span></a>
//                             </div>

//                             <div className="col-xs-4">
//                                 <a className="couldSelect"><span className="glyphicon glyphicon-check pull-right" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="I like it!"></span></a>
//                             </div>
//                         </div>