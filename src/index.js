import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const Hi = (props) => {
  return (
  <div class="container_main">
    <div class="card">
    <div class="card-body crd">
      <img class="img" src={props.img} alt="img"></img>
      <div class="nme">{props.name}</div>
      <div class="tim">{props.time}</div>
    </div>
    <img class="card-img-bottom post" src={props.post} alt="post" ></img>
    <div class="line bg-white py-1">
        <div class="container">
          <div class="line"></div>
        </div>
    </div>
    <div class="cont">
      <button type="button" class="btn bt">Like</button><button type="button" class="btn bt1">Share</button>
    </div>
    <div class="line bg-white py-1">
        <div class="container">
          <div class="line"></div>
        </div>
    </div>
    </div>
    </div>
  );
}

ReactDOM.render(<div><Hi name="Usama" 
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqndc2h6rTCUNWUDREc5HAzhB6lFwsl7CcpA&usqp=CAU"
post="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs91BeBnh_YnINvIRE7VVbnkjd6lBjF261g&usqp=CAU"
time="1 December at 22:23"
/>
<Hi name="saad" 
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eeqnRAnpfiMMgZMoPdZvcNUUwYFrvxjrRg&usqp=CAU"
post="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwgoQP1QPM-fZ13Yckn9nGVgig3d48w-szg&usqp=CAU"
time="2 December at 12:26"
/></div>  
, document.querySelector("#root"));
