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


   //  picture={item.picture.large.url} 



        // <div className="projectShootMiniCardSetup">
        //     <Link to={'/shoot/' + this.props.projectId + '/assets/' + this.props.id + '/collaborate'}><div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        //         <div className="panel miniCardPanel">

        //         <div className="panel-heading miniCardFigNMessage">
        //             <div className="row">
        //                 <div className="col-xs-8">
        //                     <h3 className="panel-title pull-right">Order: {this.props.order_num}</h3>
        //                 </div>

        //                 <div className="col-xs-4">
        //                      {this.props.comments.length > 0 ? <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true">{this.props.comments.length}</span> : ''}
        //                 </div>
        //             </div>
        //         </div>

        //             <div className="panel-heading imagePanel miniImagePanel">
        //                     {this.props.selected_photo && this.props.selected_photo.image.std.url ? <img className="miniCardPhotoView" src={this.props.selected_photo.image.std.url} alt="selection" /> : ''}
        //                 <div className="row miniCardHeading">
        //                     <div className="col-xs-6">
        //                         <h3 className="panel-title">{this.props.figure_num}</h3>
        //                     </div>

        //                     <div className="col-xs-6">

        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="panel-body">
        //                 <div className="row">
        //                     <div className="col-xs-12">
        //                         <p><span>{this.props.asset_description.slice(0,20)}...</span></p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="panel-footer miniCardFooter">
        //                 <div className="row">
        //                     <div className="col-xs-6">
        //                         <p>{this.props.date_of_shoot}</p>
        //                     </div>

        //                     <div className="col-xs-6">
        //                         <p className="pull-right">{this.props.time_of_shoot}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </Link>
        // </div>