import React, { Component } from 'react';

class ProjectShootMiniCard extends Component {
  render() {

//only show the commentIndicator span if there are new messages on that figure.

    return (
        <div>
            <a className="miniCard" onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId + '/assets' + this.props.params.id + '/collaborate')>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="panel">
                        <div className="panel-heading imagePanel">
                            <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true"></span> <br/>
                            
                            {this.props.selectionFrame === this.props.selectionFrame ? <img src={this.props.selectionFrame} alt="selection" /> : ''}
                        </div>
                        
                        <div className="panel-heading miniCardHeading">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h3 className="panel-title">{this.props.figureNumber}</h3>
                                </div>

                                <div className="col-xs-6">
                                    <h3 className="panel-title pull-right">Order: {this.props.orderNumber}</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-12">
                                    <p><span>{this.props.figureDescription}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="panel-footer miniCardFooter">
                            <div className="row">
                                <div className="col-xs-6">
                                    <p>{this.props.shootDate}</p>
                                </div>

                                <div className="col-xs-6">
                                    <p className="pull-right">{this.props.shootTime}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </a>
        </div>
    );
  }
}

export default ProjectShootMiniCard;