import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(){
        console.log("");
        super();
        this.state={
            lifecycle:"mounting of Component hapenning",
            users:[]
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log(props,state);
    //     return{
    //         lifecycle:props.data
    //     }
    // }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({lifecycle:"nothing.........is lifecycle"})
        },10000)
    }
  render() {
    return (
      <div>Mounting</div>
    )
  }
}
