import React, { Component } from "react";

export default class ImageList extends Component {
  render() {
    console.log(this.props);
    const images = this.props.images.map(({ description, id, urls }) => {
      return <img src={urls.regular} alt={description} key={id} />;
    });
    return (
      <div>
        <h1>{images}</h1>
      </div>
    );
  }
}
