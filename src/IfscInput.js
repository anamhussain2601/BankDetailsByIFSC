import React, { Component } from "react";
import IFscCode from "./IfscCode";
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
        <div
          className="ui action input"
          style={{ marginBottom: "10px", marginTop: "10px" }}
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
        {this.state.loading ? 
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
         : 
          <IFscCode bankDetails={this.state.bankDetails} />
        }
      </React.Fragment>
    );
  }
}

export default IfscInput;
