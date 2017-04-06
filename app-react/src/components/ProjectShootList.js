import React, { Component } from 'react';
import ProjectShootMiniCard from './ProjectShootMiniCard';

class ProjectShootList extends Component {
  render() {

//users fill out figure information in ProjectCreateCard, it goes to ProjectShootFullCard AND ProjectShootMiniCard. Then ProjectShootMiniCards get placed in a list on ProjectShootList. Each ProjectShootFullCard has its own page, ProjectIndividualFigureList where all of the information can be seen, comments added, and photos uploaded.
    return (
      <div>
        <h1>Photo Shoot List</h1>
          <h2>PullAuthorName PullTitle</h2>
          <p>Pull description.</p>

          <h2>How to Organize Your Photo Shoot</h2>
            <ol>
              <li>Get started by clicking the "Add Photo Shoot Planning Card" button.</li>
              <li>Fill in whatever information you have available to you. You can go back and edit or add to the information later, if you need to.</li>
              <li>Once you have saved the planning card, a mini card will appear on this page. You can navigate to the figure card with the full information by clicking on the mini card.</li>
              <li>Once in the figure card, you and your collaborators can add comments back and forth. This is also where photos for that figure can be uploaded after the photo shoot, and where you can make selections.</li>
            </ol>

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


      </div>

    );
  }
}

export default ProjectShootList;