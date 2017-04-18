import React from 'react'

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = {
      image: null,
      // frame_num: '', 
      token: ''
    }
  }

  upload() {
    var data = new FormData()
    data.append('image', this.state.image)
    // data.append('frame_num', this.state.frame_num)
    // data.append('api_token', sessionStorage.getItem('phetchly'))

    fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos?token=' + sessionStorage.getItem('token'), {
      method: 'POST',
      body: data
    })
    // .then(response => response.json())
    .then(response => {
      this.props.getImages()
      this.setState({
        image: ''
      })
    })
  }

  render() {
    return <div>
      <div className="form-group">
        <input type="file" name="image" className="form-control imageUploader" value={this.state.image} required onChange={(e) => this.setState({image:e.target.files[0]})} />
      </div>

      <div className="form-group">
        <button onClick={this.upload} type="button" className="btn btn-success btn-block upload">Upload</button>
      </div>
    </div>
  }
}

export default PhotoUploader;

      // <div className="form-group">
      //   <label htmlFor="frame_num" className="photoFrameInstructions">Enter the Frame Number for Each Photo Uploaded</label>
      //   <input type="text" name="frame_num" className="form-control" required maxLength="255" value={this.state.frame_num} onChange={(e) => this.setState({frame_num:e.target.value})} />
      // </div>