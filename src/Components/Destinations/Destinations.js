import React, { Component } from "react";
import "./Destinations.css";
import Tour from "./Tour";
import { tourData } from "../../tourData";

class Destinations extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    console.log(id);
  };
  render() {
    //   console.log(this.state.tours);
    const { tours } = this.state;
    // this is called destructuring

    return (<div className="tourList">
        {
tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>))
    }
    </div>
    );
  }
}
export default Destinations;
