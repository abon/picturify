import React, { Component } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found {this.state.images.length} images</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
