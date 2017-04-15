import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectPhotoCollaboratingPhotoCard extends Component {
  
  render() {

// remember to fix link path
    return (
        <div>
            <Link to={'/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos/' + this.props.params.id + '?token=' + sessionStorage.getItem('token')}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                <div className="panel">
                
                    <div className="panel-body imagePanel">
                        {<img src={this.props.image.url} alt="uploaded" />}
                    </div>

                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-xs-12 text-centered">
                                <p>{this.props.figure_num}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </div>
    );
  }
}

export default ProjectPhotoCollaboratingPhotoCard;

// <div className="row">
//                             <div className="col-xs-4">
//                                 <a className="couldSelect"><span className="glyphicon glyphicon-trash" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Delete photo"></span></a>
//                             </div>
                            
//                             <div className="col-xs-4">
//                                 <a className="doNotSelect"><span className="glyphicon glyphicon-remove-circle" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Don't select"></span></a>
//                             </div>

//                             <div className="col-xs-4">
//                                 <a className="couldSelect"><span className="glyphicon glyphicon-check pull-right" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="I like it!"></span></a>
//                             </div>
//                         </div>