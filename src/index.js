import React from 'react'
import ReactDOM from 'react-dom'



/* function Message({message})
{
     if(!message)
    {
        return <h1>no message</h1>

    }
    return <h1>{message}</h1> */

   /* return(
        <div>
       {message ? ( 
       
            <h1>{message}</h1>
        ) : (
        
        <h1>no message</h1> 
    )}

       </div>
       )
    }

 ReactDOM.render(
     //<Message message={null}/>,
     <Message message={'hiiii'}/>,

     document.getElementById('root')
 ) */


 function Box(props)
 {
    return (
    <div 
         className="box box-small" 
         style= {{border: 7}} 
         {...props}

    />
    )
 }
 ReactDOM.render(
   <Box props='small box' style={{backgroundColor: 'yellow'}}>Big Box</Box>,
    document.getElementById('root')
) 