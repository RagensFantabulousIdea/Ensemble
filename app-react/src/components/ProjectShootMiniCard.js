import React, { Component } from 'react';

import { Link } from 'react-router';

class ProjectShootMiniCard extends Component {


  render() {

    //only show the commentIndicator span if there are new messages on that figure.

    return (
        <div>
            <Link to={'/shoot/' + this.props.projectId + '/assets/' + this.props.id + '/collaborate'}><div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="panel">
                    <div className="panel-heading imagePanel">
                        {this.props.message ? <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true"></span> : ''} <br/> 
                            {this.props.selected_photo && this.props.selected_photo.image.url ? <img src={this.props.selected_photo.image.url} alt="selection" /> : ''}
                    </div>
    
                    <div className="panel-heading miniCardHeading">
                        <div className="row">
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
                                <p><span>{this.props.asset_description}</span></p>
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