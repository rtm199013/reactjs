import React, { Component } from "react";
import Item from "./Item";

export default class Gallery extends Component {
  render() {
    return (
      <div className="row border">
        <div>
          Gallery
          <br />
          Filtered by Brand (1 brand only)
        </div>
        <div>
          Collection List
          <br />
        </div>
        <Item />
      </div>
    );
  }
}
