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


// <button type="button">
// {this.props.XO12}</button>
// </div>
// <div>
// <button type="button">
// {this.props.XO13}</button>
// </div>
// <div><br/>
// <button type="button">
// {this.props.XO21}</button>
// </div>
// <div>
// <button type="button">
// {this.props.XO22}</button>
// </div>
// <div>
// <button type="button">
// {this.props.XO23}</button>
// </div>
// <div>
// <button type="button">
// {this.props.XO31}</button>
// </div>
// <div>
// <button type="button">
// {this.props.XO32}</button>
// </div>
// <div>
// <button type="button">
// {this.props.XO33}</button>
// </div>
