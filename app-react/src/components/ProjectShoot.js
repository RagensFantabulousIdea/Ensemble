import React, { Component } from 'react';
import CreateCard from './CreateCard';

class ProjectShoot extends Component {
  render() {
    return (
      <div>
        <h1>Photo Shoot</h1>
          <h2>AuthorName TITLE PROJECTNo</h2>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Add Image Planning Card</button>
        <CreateCard />

      </div>

    );
  }
}

export default ProjectShoot;