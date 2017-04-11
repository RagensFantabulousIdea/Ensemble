import React, { Component } from 'react';

class FullSizedImageView
 extends Component {
  render() {

// This is a modal that will open when a thumbnail image is clicked on.

// this removes the hidden class when you click on the button.
    // $('#showModalButton').on('click', function() {
    //     $('#modal').removeClass('hidden');

        // this hides is when you click on it. he would prefer to make a little close or x button.
        // $('.overlay-background').on('click', function() {
        //     $('#modal').addClass('hidden');
        // });
// there's a way to use if statements.
    // });

    return (
        <div>
            <div className="modal overlay-background hidden">
                <div className="overlay">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <img src="./img/hotairballoon241642_1920.jpg" alt="shoot result" />
                </div>
            </div>
        </div>
    );
  }
}

export default FullSizedImageView;