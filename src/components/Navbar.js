import React, { useState } from 'react'
import Documentation from './Documentation';
import TextArea from './TextArea';

export default function NavBar(props) {
    const heading = {
      fontSize: '20px'
    };
    
    const [btnStyle,setBtnStyle]=useState({
        color: 'white',
        backgroundColor: 'black',
    });

    const doChange = () => {
        if(btnStyle.color==='black'){
            
            setBtnStyle({
                color: 'white',
                backgroundColor:'black',
                
            }); 
            document.body.style.backgroundColor = 'white';    
            document.body.style.color = 'black';
            document.getElementById('footer').style.backgroundColor='black';
            document.getElementById('footer').style.color = 'white';
            document.getElementById("btn").innerHTML = "Dark Mode";   
        }
        else{
              
            setBtnStyle({
                color: 'black',
                backgroundColor: 'white',
            });
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.getElementById('footer').style.backgroundColor=' rgb(225, 218, 95)';
            document.getElementById('footer').style.color = 'black';
            document.getElementById("btn").innerHTML = "Light Mode"; 
        }
    }  

  return (
    <>
   
   <header>
      <nav>          
            <ul>
                <li style={heading}>{props.title}</li>
                <li><a href="/">HOME</a></li>
                <li><a href="#docu">DOCUMENTATION</a></li>
                <li><button id="btn" style={btnStyle} onClick={doChange} >Dark mode</button></li>
            </ul>
        </nav>
        </header>
        <TextArea heading="Enter the text to modify" />
        <div id="docu">
            <Documentation/>
        </div>
        
        
    </>
  )
}
