import React, { Component } from 'react';
import ProjectShootMiniCard from './ProjectShootMiniCard';

class ProjectShootList extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.

// set up if/else method to only show the art describing the process when there aren't any mini cards present on this page. 
    return (
      <div>
        <h1>Photo Shoot List</h1>
          <h2>PullAuthorName PullTitle</h2>
          <p>Pull description.</p>

          <img src="./img/shootManagerProcess.jpg" alt="click Add Photo Planning Card, add details, click on mini cards to go to a figure's Photo Collaborating page, upload results and message on each figure's Photo Collaborating page, make selections!" />

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Add Photo Shoot Planning Card</button>
            <br/>
            <br/>
            <br/>
            <br/>
            
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

            <footer>Art used with permission from Microsoft.</footer>

      </div>

    );
  }
}

export default ProjectShootList;