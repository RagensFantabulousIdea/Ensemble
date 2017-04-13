import React, { Component } from 'react';

class NavAdditionalPager
 extends Component {
  render() {

    return (
        <div>
            <nav className="navAdditional" aria-label="...">
                <ul className="pager">
                    <li className="previous"><a href="#"><span aria-hidden="true">&larr;</span> Previous</a></li>
                    <li className="next"><a href="#">Next <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default NavAdditionalPager;