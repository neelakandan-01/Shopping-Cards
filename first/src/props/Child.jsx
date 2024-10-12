import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this);
    return (
      <div>Child
        {/* <h1>{this.props.username}</h1>
        <h1>{this.props.user.username}</h1>
        <h1>{this.props.user.age}</h1> */}

        {/* <h1>{this.props.userdetails.name}</h1> */}
        {/* <button onClick={this.props.sendFun}>button</button> */}
        {/* {this.props.isLoggedin?<h1>yes,you succesfully loged in</h1>:<h1>go ans log in</h1>} */}
        {/* <h1>{this.props.arr.map((values)=>
          <li>{values}</li>
        )}</h1> */}
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}
