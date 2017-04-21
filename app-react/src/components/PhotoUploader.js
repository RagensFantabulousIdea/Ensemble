import React from 'react'
// import { LoadingButton } from 'react-bootstrap';

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = {
      image: null,
      // frame_num: '', 
      upload: false,
      token: ''
    }
  }

  upload() {
    var image = this.state.image
    
    if (image !== null) {
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
      // .then(uploadNotification => {
      //   btn.button('reset')
      // })
      // .then(blah => {
      //   this.setState({upload: false})
      // })
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

      <div className="loading">
        {this.state.upload ? <img className="loading-image" src="./img/ajax-loader.gif" alt="loading..." /> : ''}
      </div>

      <div className="form-group" >
        <button onClick={this.upload} type="button" className="btn btn-success btn-block upload">Upload</button>
      </div>

    </div>
  }
}

      // <div>
      //    {this.state.upload ? <img src="./img/ajax-loader.gif" alt="loading" /> : ''}
      // </div>

export default PhotoUploader;

      // <button type="button" data-loading-text="Loading..." className="btn btn-success btn-block upload myButton" autocomplete="off" onClick={this.upload}>Upload</button>


// <div className='progress'>
//   <div className='progress-bar'
//        role='progressbar'
//        aria-valuenow='70'
//        aria-valuemin='0'
//        aria-valuemax='100'
//        style={{width: '70%'}}>
//     <span className='sr-only'>70% Complete</span>
//   </div>
// </div>


      // <div className="form-group">
      //   <label htmlFor="frame_num" className="photoFrameInstructions">Enter the Frame Number for Each Photo Uploaded</label>
      //   <input type="text" name="frame_num" className="form-control" required maxLength="255" value={this.state.frame_num} onChange={(e) => this.setState({frame_num:e.target.value})} />
      // </div>

      //       