import React from 'react'
 const Message=()=>{
    let[msg,setMsg]=React.useState("Hello")
    // let gmHandler=()=>{
    //     setMsg("Good Morning")
    // }
    // let gnHandler=()=>{
    //     setMsg("Good Night")
    // }

    return <div>
        <h3>Message Component</h3>
        <h4>Message Value:{msg}</h4>
        <button onClick={()=>{setMsg("Good Morning")}}>GM</button>
        <button onClick={()=>{setMsg("Good Night")}}>GN</button>
    </div>
 }
export default Message