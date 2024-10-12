import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
// import ReactDOM from "react-dom";
// ReactDOM.render(element, container, callback);
// ReactDOM.render(<h1>Hello React Js</h1>, document.getElementById("root"), ()=>{
//     console.log("Dom Connected");
// })

// ReactDOM.render(<img src="https://cdn.pixabay.com/photo/2023/09/30/09/11/dachshund-8285216_640.jpg"/>, document.getElementById("root"), ()=>{
//     console.log("Dom Connected");
// })

// ! react way of creating elements
// let element=React.createElement("div", {className:"divBlocks"}, React.createElement("h1", null, "React Js"), React.createElement("img", {src:"logo512.png"}))
// createRoot(document.getElementById("root")).render(element);

// ! JSX way of creating element

// createRoot(document.getElementById("root")).render(<div className="divBloks">
//     <h1>Micky</h1>
//     <img src="https://cdn.pixabay.com/photo/2023/09/30/09/11/dachshund-8285216_640.jpg"/>
// </div>)

// ! JSX Expression

// let topic="ReactJs Virtual DOM"
// createRoot(document.getElementById("root")).render(
//     <div>
//         <h1>{topic}</h1>
//         <img src="logo192.png" alt=""/>
//         <p>This is Good subject to learn, so many companies were looking for a React Js learners.</p>
//     </div>
// )

createRoot(document.getElementById("root")).render(
    <App></App>
)


