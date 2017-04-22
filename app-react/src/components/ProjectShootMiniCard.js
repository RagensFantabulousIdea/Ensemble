import React, { Component } from 'react';

import { Link } from 'react-router';

class ProjectShootMiniCard extends Component {


    render() {

        return (
            <div>
                <Link to={'/shoot/' + this.props.projectId + '/assets/' + this.props.id + '/collaborate'}>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="panel miniCardPanel">
                            <div className="panel-heading miniPanelHeader">

                                <div className="row projectCardTitleBubble">
                                    <div className="col-sm-8 projectCardTitle">
                                        <h3 className="projectTitle">{this.props.figure_num}</h3>
                                    </div>

                                    <div className="col-sm-4 projectsOwnerMemberBubble">
                                        {this.props.comments.length > 0 ? <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true">{this.props.comments.length}</span> : ''}
                                    </div>
                                </div>
                            </div>

                            <div className="panel-body miniCardPanelBody">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p><strong>Date: </strong>{this.props.date_of_shoot}</p>
                                        <p><strong>Time: </strong>{this.props.time_of_shoot}</p>
                                        <p><strong>Order: </strong>{this.props.order_num}</p>
                                        <p><strong>Description: </strong>{this.props.asset_description}</p>
                                    </div>

                                    <div className="col-sm-6">
                                        {this.props.selected_photo && this.props.selected_photo.image.std.url ? <img className="miniCardPhotoView img-responsive" src={this.props.selected_photo.image.std.url} alt="selection" /> : ''}
                                    </div>
                                </div>
                            </div>

                            <div className="panel-footer projectCardNavButtons">
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
export default ProjectShootMiniCard;