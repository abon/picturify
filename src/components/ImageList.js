import React, { Component } from "react";
import ImageCard from "./ImageCard";
import "../css/ImageList.css";

export default class ImageList extends Component {
  render() {
    console.log(this.props);
    const images = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return (
      <div>
        <div className="image-list">{images}</div>
      </div>
    );
  }
}
