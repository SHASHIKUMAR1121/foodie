
import React from "react";
import ReactDOM from "react-dom/client";
 const root=ReactDOM.createRoot(document.getElementById("root"));
 const heading1 =React.createElement("h1",{id:"titl",},"hello conqueror");
 const heading2=React.createElement("h2",{id:"title",},"Always ready for mission to war");
 const container =React.createElement("div",{id:"container",}, [heading1,heading2]);

 root.render(container);