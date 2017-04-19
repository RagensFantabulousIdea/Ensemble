import React, { Component } from 'react';
import { Link } from 'react-router';

class SamplePhotoCard extends Component {
  
// Used to have link around the card to send us to the full view, but when it was there, the card wouldn't render. It said:
        //    <Link to={'/api/projects/' + this.props.projectId + '/assets/' + this.props.assetId + '/photos/' + this.props.params.id + '?token=' + sessionStorage.getItem('token')}>

  render() {
      console.log(this.props.image)
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                <div className="panel">
                
                    <div className="panel-body imagePanel">
                        <img src={this.props.image.url} alt="uploaded" />
                    </div>

                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-xs-12">
                                <Link className="couldSelect"><span className="glyphicon glyphicon-trash" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Delete sample image"></span></Link>
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