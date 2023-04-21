import React from "react";
// import "./style.css";

function Wrapper(props) {
  return <main style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center '}}>{props.children}</main>;
}

export default Wrapper;
