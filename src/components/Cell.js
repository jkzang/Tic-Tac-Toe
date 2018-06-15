import React, { Component } from 'react';

//We're making a button that returns either x or o based player
class Cell extends Component {

  render() {
    return (

          <button
          onClick = {() => {this.props.handleClick(this.props.index)}}
          type="button">
            {this.props.label}
          </button>
    );
  }
}

export default Cell;
