import React from 'react';
import classNames from 'classnames';
import FileInput from 'react-file-input';

class ImageUpload extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = { uploadedImages: ['example.jpg'] };
    this.renderImage = this.renderImage.bind(this);
    this.renderUploader = this.renderUploader.bind(this);
    this.renderPlaceholder = this.renderPlaceholder.bind(this);
  }

  handleChange (event) {
    console.log("image", event.target.files[0])
    // this.props.uploadImage(event.target.files[0])
  }

  renderImage (image, i) {
    return (
      <img src={image} alt='' key={'image-' + i} />
    );
  }

  renderUploader (maxUploads, uploadedImages) {
    if (uploadedImages.length >= maxUploads) return;
    return (
      <FileInput
        name="leftImage1"
        accept="image/*"
        className="imageUploadInput mdl-button--raised"
        onChange={this.handleChange} />
    );
  }

  renderPlaceholder (_, i) {
    console.log('rendering placeholder');
    return (
      <div key={'placeholder-' + i} className="placeholder" >
        <i className="material-icons">photo_camera</i>
      </div>
    );
  }

  render () {
    const { maxUploads } = this.props;
    const { uploadedImages } = this.state;

    const imageUploadClasses = [
      "ImageUpload"
    ];

    const placeholderCount = (maxUploads - 1) - uploadedImages.length;
    const placeholders = new Array(Math.max(0, placeholderCount)); 

    return (
      <div className={classNames(imageUploadClasses)} >
        <div className="ComponentHeader left">
          <h6>Left Eye</h6>
        </div>
        <div className="imageInputs">
          {uploadedImages.map(this.renderImage)}
          {this.renderUploader(maxUploads, uploadedImages)}
          {placeholders.map(this.renderPlaceholder)}
        </div>
      </div>
    );
  }

}

ImageUpload.defaultProps = {
  maxUploads: 3
};

export default ImageUpload;