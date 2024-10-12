//!class based component
import React from "react";
// import CBCStateEx from "./states/CBCStateEx";
// import FBCStateEx from "./states/FBCStateEx";
// import Parent from "./props/Parent";
// import LiftState1 from "./states/LiftState1";
// import LiftState2 from "./states/LiftState2";
// import FBCPropsEx from "./props/FBCPropsEx";
// import Mounting from "./lifecycles/Mounting";
import Fetch from "./Fetch";


class App extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         text:""
    //     }
    // }
    // handleChange=(newText)=>{
    //     this.setState({text:newText})
    // }
    render(){
        return(
            <div>
                {/* <CBCStateEx></CBCStateEx>
                <hr />
                <br />
                <hr />
                <FBCStateEx></FBCStateEx> */}
                {/* <Parent></Parent> */}


                {/*!lift state up */}

                {/* <LiftState1 text={this.state.text} handleChange={this.handleChange}></LiftState1>
                <LiftState2 text={this.state.text}></LiftState2> */}

                {/* <FBCPropsEx username="neelakandan" age={26} arr={[1,2,3,4,5,6]} obj={{name:"neela",age:19}}></FBCPropsEx> */}
                {/* <Mounting></Mounting> */}
                <Fetch/>
            </div>
        )
    }
}

export default App;

//!funcitonal based component
// function App(){
//     return (
//         <h1>functional based component</h1>
//     )
// }
// export{
//     App
// }

//!
// const App=()=>{
//     return <h1>Functional based component</h1>
// }
// export default App;


