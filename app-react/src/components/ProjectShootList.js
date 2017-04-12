import React, { Component } from 'react';
import ProjectShootMiniCard from './ProjectShootMiniCard';
import NavBar from './NavBar';
import FooterArea from './FooterArea';

import { browserHistory } from 'react-router';

class ProjectShootList extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// set up if/else method to only show the art describing the process when there aren't any mini cards present on this page. 
    return (
      <div className="projectShootListPage">
        <NavBar />
        <h1>Project Shoot List</h1>

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="projectInfoShootListPage"><span className="projectName">Pull Author Name</span>, <span className="projectTitle">Pull Title Could Be Long</span></h2>
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
                  <ProjectShootMiniCard />
                  <ProjectShootMiniCard />
                  <ProjectShootMiniCard />
                  <ProjectShootMiniCard />
                  <ProjectShootMiniCard />
                  <ProjectShootMiniCard />
                  <ProjectShootMiniCard />
              </div>
            </div>

          <FooterArea />
      </div>

    );
  }
}

export default ProjectShootList;