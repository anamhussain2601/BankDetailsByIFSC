import React, { Component } from 'react';
import IfscInput from './IfscInput';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      bankdetails:[
        {
      CONTACT:'2228222',
      BRANCH:'RTGS-HO',
      DISTRICT :'DAKSHINA KANNADA',
      ADDRESS:"REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002",
      STATE:"KARNATAKA",
      CITY:"MANGALORE",
      BANK:"Karnataka Bank",
      BANKCODE:"KARB",
      IFSC:"KARB0000001"
        }, {
          CONTACT:'2228222',
          BRANCH:'RTGS-HO',
          DISTRICT :'DAKSHINA KANNADA',
          ADDRESS:"REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002",
          STATE:"KARNATAKA",
          CITY:"MANGALORE",
          BANK:"Karnataka Bank",
          BANKCODE:"KARB",
          IFSC:"KARB0000001"
            }
      ]
    };
  }

  render() {
    return (
      <div>
       <IfscInput/>
      </div>
    );
  }
}

export default App;
