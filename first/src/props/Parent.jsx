import React, { Component } from 'react'
import Child from './Child'

export default class 
Parent extends Component {
    state={
        username:"neelakandn",
        age:20
    }
  render() {
    let userDetails={
      name:"sam",
      company:"Google",
      sal:12345
    }
    return (
      <div>
        Parent
        <hr />
        {/* <Child username="miller" user={this.state} userdetails={userDetails} isLoggedin={true}></Child> */}
        {/* <Child username="miller" arr={[1,2,3,4,5,6]} user={this.state} sendFun={function(){alert("this comming from parent component")}} /> */}
        <Child username="neelakandan">
            <h1>neelakandan is the author of of this component</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati officia quaerat.</p>
        </Child>
      </div>
    )
  }
}
