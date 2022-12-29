import React from 'react'
import { Graph } from './GraphAlgorithm'
import {Navigate, useNavigate} from 'react-router-dom'
export const g=new Graph();
export const array=[];


const Submit=(e)=>{
   
  alert("added")
    console.log("button chl")
var name1=document.getElementById("input1").value
console.log(name1)
var name2=document.getElementById("input2").value
g.addVertex(name1);
g.addVertex(name2);
if(array.includes(name1)==false) array.push(name1);
if (array.includes(name2)==false) array.push(name2);
g.addEdge(name1,name2);
console.log(g);
console.log(array+"arrr");
document.getElementById("input1").value="";
document.getElementById("input2").value="";
}


export const InputForm=()=>{
  console.log(g)
  
  const navigate = useNavigate();
  const Generate=()=>{
    navigate('/OutputForm')
  }
    return(
        <div className='form'>
    <div class="row">
    <div class="col">
      <input type="text" id="input1" class="form-control in" placeholder="Person 1" aria-label="First name"/>
    </div>
    <div class="col">
      <input type="text" id="input2" class="form-control in" placeholder="Person 2" aria-label="Last name"/>
    </div>
    <div className='form2'>
    <div class="dropdown item">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Relationship
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Friend</a></li>
  </ul>
</div>
    <button type="button item" onClick={Submit} class="btn btn-success" >Add Relationship</button>
    <button type="button item" onClick={Generate} class="btn btn-success " >Generate Degree of Seperation</button>
     </div>  
     
     
  </div>
  </div>
    )
}

