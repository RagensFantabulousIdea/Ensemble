import React from 'react'

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = {
      image: null,
      frame_num: ''
    }
  }

  upload() {
    var data = new FormData()
    data.append('image', this.state.image)
    data.append('frame_num', this.state.frame_num)
    // data.append('api_token', sessionStorage.getItem('phetchly'))

    fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/photos?token=' + sessionStorage.getItem('token'), {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    // .then(renderView)
  }

  render() {
    return <div>
      <div className="form-group">
        <label htmlFor="image">Photo</label>
        <input type="file" name="image" className="form-control image photoFrameInstructions" required onChange={(e) => this.setState({image:e.target.files[0]})} />
      </div>

      <div className="form-group">
        <label htmlFor="frame_num">Enter the Frame Number for Each Photo Uploaded</label>
        <input type="text" name="frame_num" className="form-control photoFrameInstructions" required maxLength="255" value={this.state.frame_num} onChange={(e) => this.setState({frame_num:e.target.value})} />
      </div>

      <div className="form-group">
        <button onClick={this.upload} type="button" id="upload" className="btn btn-success btn-block">Upload</button>
      </div>
    </div>
  }
}

export default PhotoUploader