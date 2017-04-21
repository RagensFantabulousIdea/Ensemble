import React, { Component } from 'react';
import ProjectShootMiniCard from './ProjectShootMiniCard';
import NavBar from './NavBar';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';


class ProjectShootList extends Component {

 constructor(props){
   super(props) // super is required here
        this.getAssets = this.getAssets.bind(this)
        this.state = { // state of the page
          //these first four from project
          title: '',
          author: '',
          projectNumber: '',
          description: '',
          //the rest from creating an asset
          selected_photo: '',
          figureNumber: '',
          orderNumber: '',
          figureDescription: '',
          shootDate: '',
          shootTime: '',
          token: '',
          assets: [] //start with empty state
        }
      }

    //LifeCycles Methods
    componentWillMount(){
      this.getAssets()
      fetch('/api/projects/' + this.props.params.projectId + '?token=' + sessionStorage.getItem('token'))
        .then (response => response.json())
        .then(response => this.setState({
            author: response.author,
            title: response.title,
            projectNumber: response.project_num,
            description: response.description,
            token: sessionStorage.getItem('token')
        }))
    }

    getAssets(){
    fetch('/api/projects/' + this.props.params.projectId + '/assets?token=' + sessionStorage.getItem('token'))
      .then(response => response.json())
      .then(response => {
          this.setState({assets: response})
      })
    }

  render(){
    let assets = this.state.assets.map((asset, key) => <ProjectShootMiniCard key={Date.now() + key} index={key} {...asset} getAssets={this.getAssets} projectId={this.props.params.projectId} />)
      if (assets.length === 0) {
        assets = <h4 className="text-center cardAddInstruction">Please click the "Add Photo Shoot Planning Card" button to get started. Once a card appears, you can click on it to start collaborating.</h4>
      }

    return (
      <div className="projectShootListPage">
        <NavBar />
        <h1>Project Shoot List</h1>

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="projectTitleShootList">{this.state.title}</h2>
                <h2 className="projectInfoShootListPage"><span className="projectName">{this.state.author}</span> &nbsp; <span className="projectNumber">{this.state.projectNumber} </span> </h2>
              </div>
            </div>
            <div className="row descriptionAddButtonRow">
              <div className="col-sm-8">
                <p className="projectDescription">{this.state.description}</p>
              </div>
              
              <div className="col-sm-4">
                <button type="button" className="btn addButton pull-right" onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId + '/createcard')}>Add Photo Shoot Planning Card</button>
              </div>
            </div>
          </div>

            <div className="container">
              <div className="row">
                  {assets}
              </div>
            </div>
            
            

          <FooterArea />
      </div>
    );
  }
}

export default ProjectShootList;