import React, { Component } from "react";
import IFscCode from "./IfscCode";
import Loading from "./Loading";
import { Table, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const url = "https://ifsc.razorpay.com/";
class IfscInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankDetails: [],
      showComponent: false,
      searchedValue: "",
      loading: false
    };
  }

  onSubmit = () => {
    this.setState({
      loading: true
    });
    let API = url + this.state.searchedValue;
    fetch(API)
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({
          bankDetails: data,
          showComponent: true,
          loading: false
        });
      });
  };

  handleChange = e => {
    this.setState({
      searchedValue: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
          <div style={{display:'flex' , justifyContent:  'center '}}>
        <div
          className="ui action input"
          style={{ marginBottom: "10px", marginTop: "10px" , alignItems:'center'}}
        >
          <input
            type="text"
            placeholder="Enter the IFSC here"
            onChange={this.handleChange}
            value={this.state.searchedValue}
          />
          <button className="ui button" role="button" onClick={this.onSubmit}>
            Search
          </button>
        </div>
        </div >
        {this.state.loading ? (
          <Loading />
        ) : (
          <IFscCode bankDetails={this.state.bankDetails} />
        )}
      </React.Fragment>
    );
  }
}

export default IfscInput;
