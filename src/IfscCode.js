import React, { Component } from "react";
import { Table, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const DisplayBankdata = props => {
  let detailedIfsc = Object.keys(props.bankdetails);
  return (
    <React.Fragment>
      {props.bankdetails === "Not Found" ? (
        <p style={{textAlign:'center'}}>IFSC Not Found. Please Enter valid IFSC</p>
      ) : (
        <Table celled>
          <Table.Body>
            {detailedIfsc.map((keys, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{keys}</Table.Cell>
                  <Table.Cell>{props.bankdetails[keys]}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </React.Fragment>
  );
};

class IFscCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankdetail: []
    };
  }

  render() {
    return (
      <div>
        <DisplayBankdata bankdetails={this.props.bankDetails} />
      </div>
    );
  }
}

export default IFscCode;
