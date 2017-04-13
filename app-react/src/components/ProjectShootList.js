import React, { Component } from 'react';
import ProjectShootMiniCard from './ProjectShootMiniCard';
import NavBar from './NavBar';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';

// where it says "assets" it used to say "projects"; where it says "asset" it used to say "project"
//where it says "getFigures" it used to say "getProjects"

class ProjectShootList extends Component {

 constructor(props){
   super(props) // super is required here
        this.getFigures = this.getFigures.bind(this)
        
        this.state = { // state of the page
          assets: [] //start with empty state
        }
      }

    //LifeCycles Methods
    componentWillMount() {
      this.getFigures() // put the data into it and change the state
    }
    
    componentWillReceiveProps() {
      this.getFigures()
    }

  //API Methods
  //QQRAGEN, KALEA, MANPREET, COLLIN: WHAT GOES IN THIS FETCH?
    getFigures(){
      fetch('/api/projects?complete=' + (location.href.includes('/complete') ? 'true' : 'false') + '&token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(projects => {
          this.setState({assets: assets})
        })
      }

  render() {
    let assets = this.state.assets.map((asset, key) => <ProjectShootMiniCard key={Date.now() + key} index={key} {...asset}/>)
      if (assets.length === 0) {
        assets = <h4 className="text-center">Please click the "Add Photo Shoot Planning Card to get started.</h4>
      }

    return (
      <div className="projectShootListPage">
        <NavBar />
        <h1>Project Shoot List</h1>

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="projectInfoShootListPage"><span className="projectNumber">{this.props.project_num} </span><span className="projectName">{this.props.author}</span><br/><span className="projectTitle">{this.props.title}</span></h2>
              </div>
            </div>
            <div className="row descriptionAddButtonRow">
              <div className="col-sm-6">
                <p className="projectDescription">Pull description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laboriosam minus quo ea, quae fugit repudiandae iure quibusdam molestias numquam rem incidunt nihil hic. Ducimus saepe magni, iusto voluptatum ex!</p>
              </div>
              
              <div className="col-sm-6">
                <button type="button" className="btn addButton pull-right" onClick={() => browserHistory.push('/shoot/:projectId/createcard')}>Add Photo Shoot Planning Card</button>
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