import React from 'react';
import classNames from 'classnames';
import FileInput from 'react-file-input';

class ImageUpload extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = { uploadedImages: [] };
    this.renderImage = this.renderImage.bind(this);
    this.renderUploader = this.renderUploader.bind(this);
    this.renderPlaceholder = this.renderPlaceholder.bind(this);
  }

  handleChange (event) {
    console.log("image", event.target.files[0])
    // this.props.uploadImage(event.target.files[0])
  }

  renderImage (image, i) {
    image = "/images/dog-eye-2.jpg"
    return (
      <div>
        <img src={image} alt='' key={'image-' + i} className="mdl-button--raised" />
      </div>
    );
  }

  renderCoverImage (image, i) {
    image = "/images/dog-eye-2.jpg"
    return (
      <div key={'image-' + i} >
        <div className="mdl-button--raised"  > 
        </div>
      </div>
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
    return (
      <FileInput
        disabled
        key={"placeholder-" + i}
        name="leftImage1"
        accept="image/*"
        className="imageUploadInput "
        onChange={this.handleChange} />
    );
  }

  handleRemove () {
    // todo: clear inputs and remove images from db
  }

  render () {
    const { maxUploads } = this.props;
    const { uploadedImages } = this.state;

    const imageUploadClasses = [
      "ImageUpload"
    ];

    const placeholderCount = (maxUploads - 1) - uploadedImages.length;
    const placeholders = Array.apply(null, { length: placeholderCount }).map(function (_, i) {
      return (<div />);
    });

    return (
      <div className={classNames(imageUploadClasses)} >
        <div className="ComponentHeader left margin-bottom-small">
          <h6>{this.props.title}</h6>
          <span onClick={this.handleRemove} >Remove All</span>
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