import React from 'react'
// import { LoadingButton } from 'react-bootstrap';

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = {
      image: '',
      token: ''
    }
  }

  upload() {
    var image = this.state.image
    
    if (image !== '') {
      var data = new FormData()
      data.append('image', this.state.image)

      fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos?token=' + sessionStorage.getItem('token'), {
        method: 'POST',
        body: data
      })
      
      .then(response => {
        this.props.getImages()
        this.setState({
          image: ''
        })
      })
    }
  else {
    alert('You must select an image file to upload.')
  }
    }
      

render() {
    return <div>
      <div className="form-group" >
        <input type="file" name="image" className="form-control imageUploader" value={this.state.image} required onChange={(e) => this.setState({image:e.target.files[0]})} />
      </div>

      <div className="form-group" >
        <button onClick={this.upload} type="button" className="btn btn-success btn-block upload">Upload</button>
      </div>
    </div>
  }
}

export default PhotoUploader;
