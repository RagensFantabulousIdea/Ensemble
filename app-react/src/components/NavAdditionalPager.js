import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NavAdditionalPager extends Component {
  render() {

    return (
        <div>
            <nav className="navAdditional" aria-label="...">
                <ul className="pager">
                    <li className="previous"><a onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId)}><span aria-hidden="true">&larr;</span> Previous</a></li>
                    <li className="next"><a href="#">Next <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default NavAdditionalPager;
// <Link className="nav-item projectNav" onClick={() => browserHistory.push('/projects/complete')}>