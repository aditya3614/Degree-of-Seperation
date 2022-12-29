import React from 'react';
import { array } from './InputForm';
import Select from 'react-select'
import { useState,useEffect } from 'react';
import {g} from './InputForm';
import { Graph } from './GraphAlgorithm';
import {Navigate, useNavigate} from 'react-router-dom'




var graph=new Graph();
graph=g;


export const OutputForm=()=>{
console.log(graph);
const navigate = useNavigate();

  const options=[];
for (let index = 0; index < array.length; index++) {
 var element=array[index];
 var obj={value: element,label: element}
   options.push(obj);
}



    const [displayText, setDisplayText] = useState('');

    const handleClick = () => {
      var val1=selectedOption1.value
      var val2=selectedOption2.value
      const bfs=g.bfs(val2,val1);

      const path=g.bfs(val2,val1).path;
      // const value=g.bfs(`${selectedOption1}`,`${selectedOption2}`);
      if (selectedOption1.value == selectedOption2.value) {
        setDisplayText('same perosn');
      }
  
  else if(bfs==false){
        setDisplayText('no connection');
      }
      else setDisplayText(path);
      

      

      
    }

    const [selectedOption1, setSelectedOption1] = useState({ value: '', label: 'Person1' });
    const [selectedOption2, setSelectedOption2] = useState({ value: '', label: 'Person2' });
  
    const handleChange1 = (selectedOption) => {
      setSelectedOption1(selectedOption);
    }

  
    const handleChange2 = (selectedOption) => {
      setSelectedOption2(selectedOption);
    }

    console.log(selectedOption1.value)
    console.log(selectedOption2)


  


    
 
    return(
        <div className='form'>
        <div class="row">
            <div className='col'>
            <Select options={options} id="select1" className="select1 sel" defaultValue={selectedOption1}
        onChange={handleChange1}/>
            </div>
            <div className='col'>
            <Select options={options} id="select2" className="select2 sel"  defaultValue={selectedOption2}
        onChange={handleChange2}/>
            </div>

            

            <div className='buttons'>
            <button type="button" onClick={handleClick} class="btn btn-secondary btn1">Generate Degree of Seperation</button>
            {displayText && <p className='text'>{displayText}</p>} 
            <button type="button"  onClick={()=>{navigate('/')}} class="btn btn-secondary">back</button>
            </div>
            </div>
        </div>


   

    )
   
    }
