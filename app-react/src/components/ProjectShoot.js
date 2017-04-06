import React, { Component } from 'react';
import ProjectShootCard from './ProjectShootCard';

class ProjectShoot extends Component {
  render() {

         //users fill out figure information in CreateCard, it goes to ProjectShootCard. Then ProjectShootCard gets placed in a list on ProjectShoot.
    return (
      <div>
        <h1>Photo Shoot</h1>
          <h2>AuthorName TITLE PROJECTNo</h2>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Add Photo Shoot Planning Card</button>
            <br/>
            <br/>
            <br/>
            <br/>

        <ProjectShootCard />

      </div>

    );
  }
}

export default ProjectShoot;