import React, { Component } from "react";
import { Table, Dimmer, Loader, Image, Segment } from "semantic-ui-react";


class Loading extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      </div>
    );
  }
}

export default Loading;
