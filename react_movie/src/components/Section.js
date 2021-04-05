import React, { Component } from "react";

class MySection extends Component {
  render() {
    let { greeting, code } = this.props;

    return (
      <section className='section'>
        <h2>This is My Section</h2>
        <p>{greeting}</p>
        <p>{code}</p>
      </section>
    );
  }
}

export default MySection;
