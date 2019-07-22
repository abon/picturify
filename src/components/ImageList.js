import React, { Component } from "react";
import "../css/ImageList.css";

export default class ImageList extends Component {
  render() {
    console.log(this.props);
    const images = this.props.images.map(({ description, id, urls }) => {
      return <img src={urls.regular} alt={description} key={id} />;
    });
    return (
      <div>
        <div className="image-list">{images}</div>
      </div>
    );
  }
}
