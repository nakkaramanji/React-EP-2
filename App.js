import React from "react";
import ReactDOM from "react-dom/client"

// const heading=React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "hello world from react!!");

//     console.log(heading);

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//     React.createElement("div",{id:"child"},
//         React.createElement("div",{id:"na"},
//             React.createElement("div",{id:"ma"},
//                 React.createElement("h1",{id:"naa"},"Nakka Hanumantharo")
//             )
//         )            
//     )
// )

const parent=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"I am child1  h1 tag"),
                React.createElement("h2",{},"I am child1 h2 tag")
            ]
            
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"i am child2 h1 ccccccctag "),
                React.createElement("h2",{},"i am child2 h2 tagGGGGGG")
            ]
        )

]
    
)
//console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("na"));
root.render(parent);