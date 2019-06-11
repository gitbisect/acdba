import React, { Component } from "react";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Main Menu'
    };
    this.render = this.render.bind(this);
  }

  render() {
    console.log(this.state.name);
    return(<div>This is th Main Menu</div>);
  }

}

export default Menu