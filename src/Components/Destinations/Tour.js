import React, { Component } from "react";
import "./Tour.css";

class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <div className="tour-container">
        <div className="tour">
          <div className="img-container">
            <img src={img} alt=" tour" />
            <span className="close-btn" onClick={() => removeTour(id)}>
              <i className="far fa-window-close"></i>
            </span>
          </div>
          <div className="tour-info">
            <h2>{city}</h2>
            <h3>{name}</h3>
            <h5>
              info{" "}
              <span onClick={this.handleInfo}>
                <i className="fas fa-sort-down" />
              </span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
          </div>
        </div>
      </div>
    );
  }
}
export default Tour;
