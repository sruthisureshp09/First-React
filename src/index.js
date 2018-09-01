import React from 'react'
import ReactDOM from 'react-dom'

 /* function Welcome(props)
{
    return <h1> Hello, {props.name} </h1>
}  */

/* class Welcome extends React.Component{
    render() {
        return <h1> Hello, {this.props.name} </h1>

    }
} */   // using esf class
/* function Welcome(props)
{
    return <h1> Hello, {props.name}  on {props.place} </h1>   
}


function Show()
{
    return <div>
               <Welcome name='Sruthi' place='vadakara' /> 
               <Welcome name='Athulya' place='tirur' />

           </div>
}

    ReactDOM.render(
  
    //<Welcome name='Sruthi' />
    Show(),
     document.getElementById('root')
       );

 */

   
        function Clock()
        {
            return <div>
                        <h1>Time Now:- {new Date().toLocaleTimeString()} </h1>
                        <h1>Date Now:- {new Date().toLocaleDateString()} </h1>
                    </div>
        }
       
        function time()
        {
            ReactDOM.render(
                Clock(),
                document.getElementById('root')
            );
        }
            //setInterval(function(){time()},1000);
            setInterval(time,1000);