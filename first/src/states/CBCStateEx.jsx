import { Component } from "react";


class CBCStateEx extends Component{
    constructor(){
        super();
        this.state={
            username:"Shambu",
            company:"QSP",
            count:0
        }
    }

    //!or
    // state={
    //     username:"bharath",
    //     company:"bangaluru"
    // }
    changeName=()=>{
        this.setState({username:"neelakandan"})
        console.log("clicked");
    }

    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
        this.setState({count:this.state.count-1});
    }
    reset=()=>{
        this.setState({count:0});
    }
    render(){
        // console.log(this)
        return(
            <div>
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>change</button>

                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
} 

export default CBCStateEx;