import React from 'react'
import ReactDOM from 'react-dom'


/* let clock= function()
{
   return <h2>this is clocktime {new Date().toLocaleTimeString()} </h2> 
}
ReactDOM.render(
  
 clock(),

    document.getElementById('root')
); */

setInterval(function(){
   
    ReactDOM.render(
  
     <h2>The Time is {new Date().toLocaleTimeString()} </h2>, 
     document.getElementById('root')
       );
},1000);

