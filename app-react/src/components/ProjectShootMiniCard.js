import React, { Component } from 'react';

import { Link } from 'react-router';

class ProjectShootMiniCard extends Component {


  render() {

    //only show the commentIndicator span if there are new messages on that figure.

    return (
        <div className="projectShootMiniCardSetup">
            <Link to={'/shoot/' + this.props.projectId + '/assets/' + this.props.id + '/collaborate'}><div className="col-xs-12 col-sm-6 col-md-4 col-lg-5 col-lg-offset-1">
                <div className="panel">
                    
                    <div className="panel-heading imagePanel miniImagePanel">
                        {this.props.comments.length > 0 ? <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true">{this.props.comments.length}</span> : ''} <br/> 
                            {this.props.selected_photo && this.props.selected_photo.image.std.url ? <img className="miniCardPhotoView" src={this.props.selected_photo.image.std.url} alt="selection" /> : ''}
                        <div className="row miniCardHeading">
                            <div className="col-xs-6">
                                <h3 className="panel-title">{this.props.figure_num}</h3>
                            </div>

                            <div className="col-xs-6">
                                <h3 className="panel-title pull-right">Order: {this.props.order_num}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <p><span>{this.props.asset_description.slice(0,20)}...</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="panel-footer miniCardFooter">
                        <div className="row">
                            <div className="col-xs-6">
                                <p>{this.props.date_of_shoot}</p>
                            </div>

                            <div className="col-xs-6">
                                <p className="pull-right">{this.props.time_of_shoot}</p>
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
export default ProjectShootMiniCard;


   //  picture={item.picture.large.url} 