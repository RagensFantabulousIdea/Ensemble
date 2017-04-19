import React from 'react'

class SampleUploader extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = {
      image: null,
      token: ''
    }
  }

  upload() {
    var data = new FormData()
    data.append('image', this.state.image)
    data.append('sample_photo', true)

    fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/sample_photos?token=' + sessionStorage.getItem('token'), {
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

export default SampleUploader;