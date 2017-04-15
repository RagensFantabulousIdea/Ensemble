import React, { Component } from 'react';

    class ImageUpload extends Component {
        constructor(props) {
            super(props)

            this._handleImageChange = this._handleImageChange.bind(this);
            this._handleSubmit = this._handleSubmit.bind(this);

            this.state = {
            file: null,
            frame_num: ''
            }
        }

        _handleSubmit(e) {
            e.preventDefault();
            // start manpreet's signup code
            var file = this.state.file
            var frame_num = this.state.frame_num

            if (file === '' || frame_num === '') {
                alert('You must fill in all fields.')
            }

            else {
            fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos?token=' + sessionStorage.getItem('token'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
            },
    //left side is always controled by backend
            body: JSON.stringify({
                file: file,
                frame_num: frame_num
                // asset_id: this.props.params.assetId
            })
        })
            .then(function(response) {
                    return response.json();
                })

            .then(function(response) {
                if (response.token) {
                    sessionStorage.setItem('token', response.token)
                    sessionStorage.setItem('userId', response.id)
                    // browserHistory.push('/projects')
            } 
            
            else {
                    alert('Photo upload error: ' + response)
                }
            })
            //end manpreet's signup code
        }
    }  // added this curly because it was mad, and this was the thing that made it work. not sure that it's really supposed to be here, though. 

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
        this.setState({
            file: file
        });
        }

        reader.readAsDataURL(file)
    }

    //end code from blog
  
  render() {

    return (
        <div className="col-xs-12">
            <div>
                <div className="form-group">
                    <form onSubmit={this._handleSubmit}>
                        <input type="file" onChange={this._handleImageChange} />
                        <label className="photoFrameInstructions" htmlFor="photoFrame">Enter the Frame Number for Each Photo Uploaded</label>
                        <input type="text" className="form-control photoFrame" onChange={(e) => this.setState({frame_num: e.target.value})}/> <br/>
                        <button type="submit" onClick={this._handleSubmit}>Upload Images for this Figure</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default ImageUpload;